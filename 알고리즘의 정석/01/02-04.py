# 이진 탐색 구현해보기

# 내 풀이
def binary_search(n, lst):
    j = 0
    while len(lst) != 0:
        h = len(lst) // 2
        
        if n == lst[h]:
            j += h
            return j
        elif n > lst[h]:
            lst = lst[h+1:]
            j += h+1
        else:
            lst = lst[:h]
    return None




# 해답
def binary_search(element, some_list):
    start_index = 0
    end_index = len(some_list) - 1
    
    while start_index <= end_index:
        midpoint = (start_index + end_index) // 2
        if some_list[midpoint] == element:
            return midpoint
        elif some_list[midpoint] > element:
            end_index = midpoint - 1
        else:
            start_index = midpoint + 1
    return None



