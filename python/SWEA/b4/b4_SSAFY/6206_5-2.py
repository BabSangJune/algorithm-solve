"""
날짜 : 2021.07.11
학습 : SW Expert Academy
제목 : 6206. [파이썬 프로그래밍 기초(1) 파이썬의 기본 구조와 기초 문법] 5. 연산자 2
문제 : 킬로그램(kg)를 파운드(lb)으로 변환하는 프로그램을 작성하십시오.
이 때 1 킬로그램은 2.2046 파운드입니다.
입력 : 90 출력 : 90.00 kg =>  198.41 lb
"""

a = float(input()) #입력(부동소수점 변환)

print("{0:.2f} kg =>  {1:.2f} lb".format(a, 2.2046 * a)) #format 형식


