"""
날짜 : 2021.08.02
학습 : SWEA D1
제목 : 2046. 스탬프 찍기
문제 :
주어진 숫자만큼 # 을 출력해보세요.

주어질 숫자는 100,000 이하다.

입력 :
3

출력 :
###
"""

n = int(input())

for i in range(n):
    print('#' * i, end='')