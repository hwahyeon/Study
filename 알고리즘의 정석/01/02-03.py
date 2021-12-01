# 선형 탐색 구현

# 내 풀이

def linear_search(element, some_list):
    for n, i in enumerate(some_list):
        if element == i:
            return n
          
          
# 해답
def linear_search(element, some_list):
    for i in range(len(some_list)):
        if some_list[i] == element:
            return i
    return None

'''못 찾았을 경우도 return으로 넣어 명료하게 해줄 것'''
