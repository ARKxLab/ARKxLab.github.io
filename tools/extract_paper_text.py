#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
从由 PDF.js 导出的 HTML/文本文件中提取纯文本内容的小工具。

使用方式（在项目根目录运行）：
    python tools/extract_paper_text.py \
        "projects_collection/projects_img/I'm not confident in debiasing AI systems since I know too little/paper.md" \
        "projects_collection/projects_img/I'm not confident in debiasing AI systems since I know too little/paper_clean.txt"

脚本会：
1. 读取输入文件（通常是含有大量 <div>/<span> 标签的 HTML）。
2. 移除所有 HTML 标签，只保留文本。
3. 对常见块级元素（div、p、br 等）在结束处插入换行，尽量恢复段落结构。
4. 将多个空白折叠成一个空格，移除首尾空白。
5. 将结果写入输出文件（UTF-8 编码的纯文本），便于阅读或进一步编辑成 Markdown。
"""

import sys
import io
import re
from html import unescape
from html.parser import HTMLParser
from typing import List


class TextExtractor(HTMLParser):
    """
    简单的 HTML 文本抽取器。

    设计目标：
    - 尽可能保留页面中文字的顺序。
    - 对块级元素（如 <div>、<p>、<br> 等）在合适位置插入换行，
      以便形成“人类可读”的段落结构。
    - 忽略脚本、样式等非正文内容。
    """

    # 一些常见的块级标签，在结束时适当插入换行
    BLOCK_TAGS = {
        "div",
        "p",
        "section",
        "article",
        "header",
        "footer",
        "li",
        "ul",
        "ol",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
    }

    # 在遇到这些标签时，直接视为换行（例如 <br>）
    LINE_BREAK_TAGS = {"br", "hr"}

    # 通常需要忽略其内容的标签
    IGNORE_CONTENT_TAGS = {"script", "style"}

    def __init__(self) -> None:
        super().__init__()
        # 用列表累积字符串，最后再 join，效率较高
        self._chunks: List[str] = []
        # 是否当前位于需要忽略内容的标签内部
        self._ignore_depth = 0

    def handle_starttag(self, tag: str, attrs) -> None:
        tag = tag.lower()
        if tag in self.IGNORE_CONTENT_TAGS:
            # 进入忽略区域，深度 +1
            self._ignore_depth += 1
            return

        if tag in self.LINE_BREAK_TAGS:
            # 遇到换行标签，插入一个换行符
            self._chunks.append("\n")

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in self.IGNORE_CONTENT_TAGS:
            # 退出忽略区域，深度 -1
            self._ignore_depth = max(0, self._ignore_depth - 1)
            return

        # 块级元素结束时，插入一个换行，帮助分段
        if tag in self.BLOCK_TAGS:
            self._chunks.append("\n")

    def handle_data(self, data: str) -> None:
        # 如果当前在 script/style 等忽略标签内部，则直接跳过
        if self._ignore_depth > 0:
            return

        text = data.strip()
        if not text:
            return

        # 对 HTML 实体（例如 &amp;、&quot;）进行反转义
        text = unescape(text)
        self._chunks.append(text + " ")

    def get_text(self) -> str:
        """
        返回整理好的纯文本。

        - 连续空白折叠成一个空格。
        - 多个空行折叠。
        - 去除首尾空白。
        """
        raw = "".join(self._chunks)

        # 1. 先将 Windows / Mac 的换行统一规范化
        raw = raw.replace("\r\n", "\n").replace("\r", "\n")

        # 2. 把连续的空白（不包括换行）折叠成一个空格
        #    这里用负向前瞻避免把换行替换掉
        raw = re.sub(r"[ \t\f\v]+", " ", raw)

        # 3. 把多余的空行折叠（例如三四个空行变成一个空行）
        raw = re.sub(r"\n\s*\n\s*\n+", "\n\n", raw)

        # 4. 去除整体首尾空白
        return raw.strip()


def extract_text_from_file(input_path: str) -> str:
    """
    从指定文件中读取内容并提取纯文本。

    :param input_path: 输入文件路径（通常是 HTML/含 HTML 的 .md 文件）
    :return: 抽取出的纯文本字符串
    """
    # 使用 utf-8 打开文件，如果有 BOM 也会被自动处理
    with io.open(input_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    parser = TextExtractor()
    parser.feed(content)
    parser.close()
    return parser.get_text()


def main(argv: List[str]) -> None:
    """
    命令行入口函数。

    参数：
        argv[0]：脚本本身名称
        argv[1]：输入文件路径（必填）
        argv[2]：输出文件路径（可选，默认在同目录下生成 *_clean.txt）
    """
    if len(argv) < 2:
        print(
            "用法: python tools/extract_paper_text.py <输入文件> [输出文件]",
            file=sys.stderr,
        )
        sys.exit(1)

    input_path = argv[1]

    if len(argv) >= 3:
        output_path = argv[2]
    else:
        # 如果未提供输出路径，则在同目录下生成一个 *_clean.txt 文件
        if input_path.lower().endswith(".md"):
            output_path = input_path[:-3] + "_clean.txt"
        else:
            output_path = input_path + "_clean.txt"

    print(f"正在从文件中提取文本: {input_path}")
    text = extract_text_from_file(input_path)

    # 将结果写入输出文件
    with io.open(output_path, "w", encoding="utf-8") as f:
        f.write(text)

    print(f"完成！已将抽取出的纯文本写入: {output_path}")


if __name__ == "__main__":
    main(sys.argv)



