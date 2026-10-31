# 직방 디자인 시스템

> 근거: 공개 문서 기반 + 관찰 기반 (실측일 2026-10-31, Claude 데스크톱 앱 내장 브라우저(Chromium) · 데스크톱 폭. 직방이 공개 주소로 띄워 둔 ZUIX2 Storybook의 컴포넌트 코드에서 토큰 값을 읽고, zigbang.com 화면 computed style과 대조함. 작업 컨테이너의 셸은 이 사이트에 접속하지 못하고 WebFetch는 robots 규칙으로 막혀 이 방법을 썼다.)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 원룸·빌라·오피스텔·아파트 매물을 지도와 목록으로 찾는 부동산 서비스. 앱이 중심이고 웹(zigbang.com)은 지도 검색과 소개 화면을 둔다.
- 디자인 인상 한 줄: 흰 바탕과 #1a1a1a 글자에 주황(#ff6905) 하나를 주 버튼·선택 색으로 쓰고, 모서리 4px로 단단하게 맞춘 화면.
- 공식 시스템 이름(있으면): ZUIX(Storybook 주소는 zuix2.zigbang.io, 소스 경로는 packages/zuix). React Native와 웹을 함께 겨냥한 컴포넌트 라이브러리다. 토큰 설명 문서는 따로 없고, 컴포넌트 스토리와 그 안의 스타일 코드가 공개되어 있다.

## 2. 색상
아래 HEX는 ZUIX Storybook이 불러오는 스타일 코드의 `Color` 열거형에서 읽었다. 웹 실측과 맞은 값은 "웹 확인"으로 표시했다.

### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| orange1 | #ff6905 | 확인 필요 | 주 버튼(primary) 배경, 선택 칩 테두리·글자, 탭 밑줄, 스낵바 버튼 글자. 웹 확인 |
| orange2 | #fff7f0 | 확인 필요 | 연한 주황 버튼·칩·태그 배경 |
| orange3 | #ffe8d9 | 확인 필요 | 큰 주 버튼의 비활성 배경, 주황 외곽선 비활성 테두리 |
| navy1 | #092c59 | 확인 필요 | 진한 남색 태그·글자. 웹 확인 |
| navy2 / navy3 / navy4 | #e4ebf2 / #bccce0 / #f5f7fa | 확인 필요 | 남색 계열 연한 면 |

웹 지도 화면 상단 메뉴의 선택 글자는 #ff681b였다. 토큰 orange1과 아주 조금 다른 값이다.

### 중립(회색 단계)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray10 | #1a1a1a | 기본 글자, 진한 외곽선 버튼 테두리, 입력 포커스 테두리. 웹 확인 |
| gray30 | #4d4d4d | 스낵바 배경, 선택된 36px 칩 배경 |
| gray40 | #666666 | 보조 글자 |
| gray50 | #808080 | 흐린 글자(주소, 매물 설명). 웹 확인 |
| gray70 | #b3b3b3 | 약한 테두리 |
| gray80 | #cccccc | 비활성 글자, 바텀시트 손잡이 |
| gray90 | #e6e6e6 | 기본 테두리(입력창, 회색 외곽선 버튼·칩). 웹 확인 |
| gray95 | #f2f2f2 | 구분선, 탭 아래 선, 비활성 입력 배경. 웹 확인 |
| gray97 | #f7f7f7 | 비활성 버튼 배경, 검색창 배경 |
| gray99 | #fcfcfc | 가장 옅은 면 |
| white | #ffffff | 페이지·카드 배경 |
| grayOpacity05 / 08 / 16 | rgba(26,26,26,.05 / .08 / .16) | 사진 테두리(.08), 상단 바 아래 0.5px 선(.16) |
| grayOpacity60 / 80 | rgba(26,26,26,.6 / .8) | 사진 위 어두운 면 |
| whiteOpacity04 | rgba(255,255,255,.4) | 진한 면 위 흰 반투명 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | #0ba04b | green1. 연한 배경 green2 #e6f5ed. 웹 매물 목록의 "추천" 태그가 이 조합. 웹 확인 |
| warning | 확인 필요 | 별도 경고 토큰은 찾지 못함 |
| error | #fa4e3e | red1. 연한 배경 red2 #ffeceb. 입력 오류 테두리, 빨강 버튼 |
| info | #3798fa | blue1. 연한 배경 blue2 #ebf5ff |

### 그 밖의 색 토큰
| 토큰 | HEX |
|---|---|
| blue3 / blue4 / blue5 | #025fd2 / #1c75bc / #1a71d3 |
| green3 / green4 / green5 / green6 | #009d41 / #f0f6f2 / #3ab54b / #55baa6 |
| purple1 / purple2 | #584de4 / #eeedfc |
| Badge pink1(글자·아이콘 / 배경) | #ff20a6 / #fff5fb |
| Badge blue1(글자·아이콘 / 배경) | #0651f1 / #f0f7ff |

다크 모드 토큰은 찾지 못했다.

## 3. 타이포그래피
- 글꼴: Pretendard(ZUIX Text 컴포넌트 기본, zuix2.zigbang.io에서 subset 파일을 제공). SIL Open Font License 1.1 무료 글꼴. 웹 소개·지도 화면 일부는 아직 Spoqa Han Sans(SpoqaHanSans)를 쓴다.
- 대체 글꼴: 확인 필요(Text 컴포넌트는 fontFamily "Pretendard"만 지정).
- 굵기: regular 400, medium 500, bold 700 세 단계만 둔다. Text 기본값은 11px·medium·gray10.

| 단계 | 크기(px) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| 26 | 26 | 400·500·700 | 40px | 가장 큰 제목 |
| 24 | 24 | 400·500·700 | 36px | 큰 제목 |
| 22 | 22 | 400·500·700 | 32px | 화면 제목 |
| 20 | 20 | 400·500·700 | 30px | 섹션 제목 |
| 18 | 18 | 400·500·700 | 28px | 매물 가격(700). 웹 확인 |
| 16 | 16 | 400·500·700 | 24px | 48·44px 버튼 글자(700), 리스트 제목 |
| 14 | 14 | 400·500·700 | 20px | 40·32px 버튼, 36px 칩, 매물 정보 줄. 웹 확인 |
| 13 | 13 | 400·500·700 | 18px | 28px 버튼, 32px 칩, large 태그 |
| 12 | 12 | 400·500·700 | 16px | 24px 버튼, medium 태그 |
| 11 | 11 | 400·500·700 | 14px | small 태그, 배지 글자. 웹 확인 |
| 10 | 10 | 400·500·700 | 12px | xsmall 태그 |
| 8 | 8 | 400·500·700 | 10px | 아주 작은 표시 |

- 행간은 대부분 크기 × 1.5 안팎이고 짝수 px로 맞춘다.
- 사용자 글자 크기 설정을 따르되 최대 1.5배까지만 키운다(maxFontSizeMultiplier 1.5). 버튼 글자는 확대하지 않는다.

## 4. 간격·레이아웃
- 기본 단위: 4px. 컴포넌트 코드에 4, 8, 12, 16, 20이 반복된다. 버튼 안쪽 여백은 테두리 1px을 뺀 15·11·7·5 같은 값을 쓴다.
- 간격 단계: 2, 4, 6, 8, 12, 16, 20
- 화면 좌우 여백(모바일/데스크톱): 모바일 컴포넌트 기준 20px(탭 콘텐츠, 하단 CTA, 스낵바 바깥 여백, 구분선 여백). 데스크톱 웹은 최소 폭 1440px(`--web-min-width`).
- 그리드: 확인 필요. 웹 지도 화면 목록은 한 줄 카드에 왼쪽 글자, 오른쪽 104×104 사진.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-4 | 4px | 기본. 버튼 전부, 입력창, 검색창, 스낵바, 썸네일, 배지. 웹에서 가장 많은 값 |
| radius-12 | 12px | 바텀시트 위쪽 두 모서리 |
| radius-16 | 16px | 32px 칩 |
| radius-20 | 20px | 36px 칩, 태그 기본값 |
| shadow level1 | 0 1px 4px rgba(26,26,26,.2) | 가장 얕은 그림자 |
| shadow level2 | 0 4px 8px rgba(26,26,26,.06) | 카드 |
| shadow level3 | 0 6px 12px rgba(26,26,26,.12) | 떠 있는 패널 |
| shadow level4 | 0 8px 20px rgba(26,26,26,.10) | 가장 높은 층. 웹 소개 화면에서 확인 |
| border | 1px #e6e6e6 | 입력창·회색 외곽선 |
| border-strong | 1.4px | 진한 외곽선 버튼·선택 칩 |
| image-border | 1px rgba(26,26,26,.08) | 사진 둘레. 웹 확인 |
| hairline | 0.5px rgba(26,26,26,.16) | 상단 바·검색 바 아래 선 |

Storybook 그림자 문서는 웹(boxShadow), iOS, Android(elevation) 값을 나란히 적어 둔다.

## 6. 주요 컴포넌트
### 버튼
크기는 6단계, 모서리는 모두 4px.

| 크기 | 최소 높이 | 위아래 / 좌우 여백 | 글자 |
|---|---|---|---|
| 48 | 48 | 9 / 16 | 16px bold |
| 44(기본) | 44 | 9 / 15 | 16px bold |
| 40 | 40 | 9 / 15 | 14px |
| 32 | 32 | 6 / 11 | 14px |
| 28 | 28 | 4 / 7 | 13px |
| 24 | 24 | 3 / 5 | 12px |

| 테마 | 기본(배경 / 글자 / 테두리) | 비활성 |
|---|---|---|
| primary | #ff6905 / #ffffff / 없음 | 48·44·40: #ffe8d9 배경 흰 글자. 그보다 작으면 #f7f7f7 배경 #cccccc 글자 |
| lineGray10 | #ffffff / #1a1a1a / 1.4px #1a1a1a | #f7f7f7 / #cccccc / #e6e6e6 |
| lineGray30 | #ffffff / #1a1a1a / 1px #4d4d4d | #f7f7f7 / #cccccc / #e6e6e6 |
| lineGray90 | #ffffff / #1a1a1a / 1px #e6e6e6 | #f7f7f7 / #cccccc / #f2f2f2 |
| lineOrange | #ffffff / #ff6905 / 1.4px #ff6905 | #ffffff / #ffe8d9 / #ffe8d9 |
| orange2 | #fff7f0 / #ff6905 / 1.4px #ff6905 | 글자·테두리 #ffe8d9 |
| red1 | #fa4e3e / #ffffff | 큰 크기 #ffeceb 배경 |
| grayOpacity08 | rgba(26,26,26,.08) / 테두리 1px #b3b3b3 | 테두리 #4d4d4d |
| gray30 | #4d4d4d / 흰 글자 | #f7f7f7 |

- 굵기 규칙: 48·44 크기와 lineGray10·gray30 테마는 bold, 나머지는 medium.
- 눌림: Pressable의 feedback이 기본으로 켜져 있다. 눌림 값은 확인 필요.

### 입력창
- TextField: 1px #e6e6e6 테두리, 모서리 4px, 여백 9px 11px(큰 것 위아래 12px).
- 포커스: 테두리 1.5px #1a1a1a로 굵어지고 여백을 0.5px씩 줄여 크기를 유지한다.
- 오류: 테두리 #fa4e3e. 비활성: 배경 #f2f2f2.
- SearchBar: 상단 바 안에 높이 40px, 배경 #f7f7f7, 모서리 4px의 입력 상자. 아래에 0.5px 선.

### 카드·리스트
- ListItem: 왼쪽 요소와 12px, 오른쪽 요소와 12px 간격. 제목 기본 16px.
- 웹 매물 목록 줄: "추천" 태그(#e6f5ed 배경, #0ba04b 11px/500, 여백 2px 6px, 모서리 20px) → 가격 18px/700 → 관리비 14px/700 → 방 정보 14px/400 #1a1a1a → 위치·설명 14px #808080. 오른쪽 사진 104×104, 모서리 4px, 1px rgba(26,26,26,.08) 테두리.
- Thumbnail: 모서리 4px, 1px rgba(26,26,26,.08) 테두리, 글자 영역 좌우 12px.
- Tag: 크기 4단계. large 6/12px·13px, medium 4/8px·12px, small 2/6px·11px, xsmall 2/4px·10px. 기본 모서리 20px. 연한 배경 + 같은 계열 진한 글자 조합(orange2+orange1, blue2+blue1, red2+red1, green2+green1).
- Chip: 32px(좌우 12, 모서리 16, 글자 13px medium), 36px(좌우 16, 모서리 20, 14px). 선택되면 테두리 1.4px #ff6905, 글자 #ff6905. 36px 선택형은 #4d4d4d 배경에 흰 글자.
- Divider: 선 1px #f2f2f2, 구역 구분은 높이 12px 면.

### 상단 바·탭 바
- TopBar: 높이 52px, 좌우 12px, 아래 여백 6px, 흰 배경. 아래 0.5px rgba(26,26,26,.16) 선.
- Tab: 높이 52px, 콘텐츠 좌우 20px, 탭 하나 여백 위 16px·좌우와 아래 12px. 선택 밑줄 2px #ff6905, 탭 줄 아래 1px #f2f2f2.
- BottomNavigation: 높이 68px, 흰 배경, 아이콘과 글자 사이 4px.

### 바텀시트·모달
- BottomSheet: 흰 배경, 위쪽 모서리 12px. 손잡이 34×4px, 모서리 5px, 색 #cccccc.
- 전체 화면 Dialog: 등장·퇴장 300ms. 아래에서 올라오는 slide 또는 fade. 들어올 때 ease-in, 나갈 때 ease-out.
- BottomCTA: 바깥 여백 좌우 20px·위아래 12px. 버튼 두 개는 세로(간격 8px) 또는 가로(5:5, 1:2, 2:1) 배치.

### 토스트·스낵바
- SnackBar: 화면 아래 고정, 좌우 20px 띄움, 최대 폭 400px. 배경 #4d4d4d, 여백 12px, 모서리 4px. 글자 흰색, 오른쪽 버튼 글자 #ff6905.

## 7. 아이콘·이미지·모션
- 아이콘 스타일·크기: ZUIX Icon 컴포넌트에 SVG 아이콘 세트가 들어 있다. 버튼 스토리 예시는 24px, 배지 안 아이콘은 16px. 기본 크기는 확인 필요.
- 일러스트·사진 쓰는 방식: 매물 사진은 4px 모서리와 옅은 테두리. 사진 위 글자에는 rgba(0,0,0,.5) 글자 그림자를 쓴다.
- 모션 길이·이징: Dialog 300ms, 들어올 때 ease-in·나갈 때 ease-out. 그 밖은 확인 필요.

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 해요체. 매물 정보는 짧은 명사구를 가운뎃점(·)으로 잇는다.
- 예시(직접 관찰한 문장 구조만, 원문 복사 금지):
  - 매물 요약: [거래 종류] [보증금/월세] 다음 줄에 [구조] · [면적] · [층].
  - 검색 안내: [찾을 수 있는 대상 1], [대상 2], [대상 3] 검색 꼴의 나열형.
  - 상태 태그는 두 글자 안팎 명사(추천 등).

## 9. AI에 넣을 때
```
직방(ZUIX) 스타일로 디자인해 줘.
- 주색: #ff6905 (연한 면 #fff7f0, 비활성 #ffe8d9)
- 글자: #1a1a1a 기본, #808080 보조, #cccccc 비활성
- 배경: #ffffff, 약한 면 #f7f7f7, 테두리 #e6e6e6, 구분선 #f2f2f2
- 상태: 성공 #0ba04b, 오류 #fa4e3e, 정보 #3798fa
- 글꼴: Pretendard, 크기/행간 18/28, 16/24, 14/20, 13/18, 12/16, 굵기 400·500·700
- 모서리: 버튼·입력·카드 4px, 칩·태그 16~20px, 바텀시트 위 12px
- 간격 단위: 4px, 화면 좌우 20px
- 버튼: 높이 48/44/40/32/28/24, 주 버튼 주황 배경 흰 글자 16px bold
- 분위기: 각진 4px 모서리, 주황은 행동과 선택에만, 그림자는 얕게
```

## 10. 참고 자료
- https://zuix2.zigbang.io/ (확인 2026-10-31, 직방 ZUIX2 Storybook. index.json의 컴포넌트 목록과 스토리 코드)
- https://zuix2.zigbang.io/assets/iframe-BejBUJc2.js (확인 2026-10-31, Storybook 진입 코드. 여기서 불러오는 style·Button·Text·Tag·Chip·TextField·SnackBar·BottomSheet·TopBar·Tab 조각에서 값을 읽음. 빌드마다 주소가 바뀐다)
- https://zuix2.zigbang.io/font/pretendard-subset.css (확인 2026-10-31, 글꼴)
- https://www.zigbang.com/ (확인 2026-10-31, 소개 화면 실측)
- https://www.zigbang.com/home/oneroom/map (확인 2026-10-31, 지도·매물 목록 실측)
- https://s.zigbang.com/zigbang-www/_next/static/css/235e93ad9dfc2a45.c1.css (확인 2026-10-31, 웹이 불러온 스타일시트 주소)
- https://github.com/zigbang (확인 2026-10-31, 공개 저장소 36개 중 ZUIX 저장소는 보이지 않음)

### 근거와 한계
- 색·글자 단계·버튼·입력·칩·태그·스낵바·바텀시트·탭 수치는 ZUIX Storybook의 스타일 코드에서 읽었다. 코드에서 읽은 값이라 문서의 설명 문장은 없다.
- 웹 화면에서는 orange1, gray10, gray50, gray90, gray95, green1·green2, 4px 모서리, 18/28·14/20 글자 단계, shadow level4가 실제로 쓰이는 것을 확인했다.
- 웹은 상품 상세 화면이 앱 위주라 상세 화면은 실측하지 못했다. 다크 모드, 경고 색, 눌림 피드백 값, 그리드는 확인하지 못했다.
- Storybook과 웹 실측값은 배포가 바뀌면 달라질 수 있다.
- 직방 이름과 브랜드는 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.
