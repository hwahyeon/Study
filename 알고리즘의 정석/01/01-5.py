'''
"토마토"나 "기러기"처럼 거꾸로 읽어도 똑같은 단어를 팔린드롬(palindrome)이라고 부릅니다. 문자열 word가 팔린드롬인지 확인하는 함수 is_palindrome를 쓰세요.
'''

# 내 풀이
def is_palindrome(word):
    return word == word[::-1]

# 테스트
print(is_palindrome("racecar"))
print(is_palindrome("stars"))
print(is_palindrome("토마토"))
print(is_palindrome("kayak"))
print(is_palindrome("hello"))


#반드시 for문을 사용하라는 조건 이행 시 내 풀이
def is_palindrome(word):
    cnt = 0
    for i, j in zip(word, word[::-1]):
        if i != j:
            cnt += 1
    return cnt == 0

# 테스트
print(is_palindrome("racecar"))
print(is_palindrome("stars"))
print(is_palindrome("토마토"))
print(is_palindrome("kayak"))
print(is_palindrome("hello"))
