# 제3장 웹 스크래핑을 통한 데이터 수집
# 국회 홈페이지에서 국회의원 이름, 코드, 사진 추출
# 본 풀이에선 photo라는 file 생성이 선결되어 있어야 함.

from bs4 import BeautifulSoup
import requests
import re
import csv
import os

# Congress man current page
url = 'https://www.assembly.go.kr/assm/memact/congressman/memCond/memCondListAjax.do?currentPage=1&rowPerPage=300'

# Data requests
req = requests.get(url)
req.status_code
'''
101 : 데이터 처리 중
200 : 서버가 성공적으로 데이터 요청 처리
300 : 웹 페이지가 새로운 위치로 이동
403 : 서버가 권한 부족으로 요청 거부
404 : 해당 웹 페이지 찾을 수 없음
500 : 서버 오류
503 : 서버 오버 로드 혹은 서버 유지 관리를 위해 다운되었음
'''
req.text
html = req.content

# Data analysis
soup = BeautifulSoup(html, 'html.parser')
member_list = soup.select('.memberna_list dl dt a')

with open('member_list.csv', 'w') as f:
    csv_writer = csv.writer(f)

    for member in member_list:
        # names of congress men
        name = member.text

        # IDs of Congress
        id_href = member['href']

        pattern = re.search(r'\d+', id_href)
        if pattern:
            mem_id = pattern.group(0)
        else:
            mem_id = None

        # Pics of Congress
        pic = open('photo/{}.jpg'.format(mem_id),'wb')
        request_photo =\
            requests.get('http://www.assembly.go.kr/photo/{}.jpg'.format(mem_id)).content
        pic.write(request_photo)
        csv_writer.writerow([name, mem_id])
