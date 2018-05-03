#!C:\Users\abrad\AppData\Local\Programs\Python\Python36-32\python.exe
# !/usr/bin/env python3

from __future__ import print_function
import sys
import os
from os import path
import re
import json
from robot.parsing.model import TestData


print('Content-type: application/json')
print()


def parse_data(robotfile):
    data = {}
    suite = TestData(parent=None, source=robotfile)
    testcases = suite.testcase_table.tests
    for t in testcases:
        data.update({'Name: ': t.name})
        print(t.name)
    json.dump(data).encode('utf-8')



def main():
    parse_data("TOE.robot")


if __name__ == "__main__":
    main()
