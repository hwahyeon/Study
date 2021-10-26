# 내 풀이 
N, M, K = map(int, input().split())
lst_ = list(map(int, input().split()))
lst_or = sorted(lst_, reverse=True)
res = 0

for i in range(1, M+1):
    if i%(K+1) == 0:
        res += lst_or[1]
    else:
        res += lst_or[0]
print(res)


# 답안
# N, M, K를 공백을 기준으로 구분하여 입력 받기
n, m, k = map(int, input().split())
# N개의 수를 공백을 기준으로 구분하여 입력 받기
data = list(map(int, input().split()))

data.sort() # 입력 받은 수들 정렬하기
first = data[n - 1] # 가장 큰 수
second = data[n - 2] # 두 번째로 큰 수

# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first # 가장 큰 수 더하기
result += (m - count) * second # 두 번째로 큰 수 더하기

print(result) # 최종 답안 출력
