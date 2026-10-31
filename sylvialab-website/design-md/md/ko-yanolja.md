# 놀 NOL (야놀자) 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, Claude 데스크톱 앱 내장 브라우저(Chromium) · 1024px 폭과 375×812 모바일 에뮬레이션, computed style과 페이지가 불러온 CSS 파일의 클래스 정의를 읽음. 작업 컨테이너의 셸은 이 사이트에 접속하지 못해 Playwright 대신 이 방법을 썼다.)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 숙소·항공·레저·공연 티켓을 함께 파는 여행·여가 예약 서비스. 웹 주소는 nol.yanolja.com이다.
- 디자인 인상 한 줄: 거의 검정에 가까운 글자(#1b1c1f)와 흰 면 위에 파란 보라(#4154ff)를 행동 색으로, 빨강(#e5000f)을 할인 색으로 쓰는 둥근 카드 화면.
- 공식 시스템 이름(있으면): 공개 문서는 찾지 못했다. 다만 웹 CSS에 `text-text-primary-main`, `bg-fill-neutral-weak`, `border-line-neutral-weak2`, `typography-subtitle-16-bold` 같은 규칙적인 토큰 클래스가 있다. 역할(text·fill·line) + 색 계열(primary·neutral·accent·danger·warning) + 세기(main·medium·sub·weak1~4)로 이름을 짓는다. 클래스 접두어 `ds-pc`, `ds-pc-wide`로 보아 내부 디자인 시스템이 있는 것으로 보이지만 이름은 확인 필요.

## 2. 색상
아래 HEX는 CSS 파일의 토큰 클래스 정의에서 읽고, 화면 computed style과 맞는지 대조했다.

### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| primary-main (text·fill·line) | #4154ff | 확인 필요 | "예약하기" 버튼 배경, "회원가입"·"회원가" 글자, 알림받기 외곽선 버튼, 검색창 테두리(1.5px), 공지 배지 |
| primary-weak4 (line) | #7280ff | 확인 필요 | 진한 보조 테두리 |
| primary-weak2 (line) | #b2baff | 확인 필요 | 연한 파랑 배지 테두리 |
| primary-weak1 (line) | #dfe2ff | 확인 필요 | 가장 연한 파랑 테두리 |
| primary-weak (fill) | #f5f6ff | 확인 필요 | 연한 파랑 배지 배경("지금예매" 류) |
| accent-main (fill) | #e5000f | 확인 필요 | 할인율 글자(text-accent-medium 클래스로 붙지만 값은 같음), "당일특가" 같은 강조 |
| accent-weak (fill) | #fef5f5 | 확인 필요 | 빨강 계열 연한 배경 |

다크 모드 규칙(`.dark`, `prefers-color-scheme: dark`)은 CSS에서 찾지 못했다.

### 중립(회색 단계)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| neutral-main (text·fill·line) | #1b1c1f | 기본 글자. 선택된 상단 칩 배경. 지역선택 상자 테두리 |
| neutral-sub (text) | #6e6f73 | 정가 취소선, 선택 안 된 탭, 검색창 안내 글자 |
| neutral-medium (text·line) | #8b8d92 | 날짜 같은 흐린 정보 |
| neutral-weak3 (fill·line) | #dadbdf | 흰 버튼·필터 칩 테두리 |
| neutral-weak2 (fill·line) | #e9eaef | 카드·날짜 선택 상자 테두리 |
| neutral-weak1 (fill·line) | #f2f3f7 | 구분선, 눌림·호버 배경(interaction-neutral-presshover-weak1) |
| neutral-weak (fill) | #f7f8fb | 공지 띠 배경, 옅은 면 |
| static-white | #ffffff | 페이지·카드 배경, 진한 바탕 위 글자 |
| static-black | #000000 | 고정 검정 |
| opacity-black-5~80 | rgba(0,0,0,.05~.8) | 이미지 테두리 .05, 시트 뒤 막(scrim) .5, 사진 위 버튼 .5~.6 |
| opacity-white-20·80 | rgba(255,255,255,.2/.8) | 사진 위 흰 반투명 |

참고: 객실 카드의 "취소 및 환불 불가" 글자는 #6d6d6d였다. 토큰 목록에 없는 값이다.

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | 확인 필요 | 토큰 클래스에서 찾지 못함 |
| warning | #cc4100 | text-warning-main. 경고 배경 fill-warning-weak는 #fef8f2 |
| error | #e5000f | text·fill·line-danger-main. 연한 테두리 line-danger-weak2는 #f59ea4 |
| info | 확인 필요 | |

### 멤버십 색(참고)
| 토큰 | HEX |
|---|---|
| membership-dia-main | #3549ff |
| membership-dia-weak2 | #bfd1ff |
| membership-gold-main | #996500 |
| membership-gold-weak2 | #fddd72 |
| membership-platinum-main | #008161 |
| membership-platinum-weak3 | #7ce7d0 |
| membership-silver-main | #6e6f73 |

## 3. 타이포그래피
- 글꼴: Pretendard. yaimg.yanolja.com에서 Pretendard 글꼴 조각 CSS를 불러온다. Pretendard는 SIL Open Font License 1.1 무료 글꼴이다.
- 대체 글꼴: -apple-system, system-ui, sans-serif
- 루트 글자 크기가 10px라서 1.6rem = 16px다. 자간은 실측한 글자 모두 normal이었다.

| 단계 | 크기(px) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| headline-40 | 40 | 700 | 48px | 가장 큰 제목 |
| headline-32 | 32 | 700 / 400 | 38px | 큰 제목 |
| headline-24 | 24 | 700 / 400 | 29px | PC 숙소 이름(H1), PC 객실 가격, 평점 숫자 |
| subtitle-20 | 20 | 700 / 600 / 400 | 24px (여러 줄 28px) | 모바일 숙소 이름, PC 객실 이름(H2) |
| subtitle-18 | 18 | 700 / 400 | 22px | 모바일 섹션 제목, 날짜·인원 값 |
| subtitle-16 | 16 | 700 / 600 / 400 | 19px (여러 줄 24px) | 객실 이름(H4), 할인율, 탭 글자, 필터 칩 |
| body-14 | 14 | 700 / 600 / 400 | 17px (여러 줄 21px) | 버튼 글자, 정가, 본문 |
| body-13 | 13 | 700 / 600 / 400 | 16px (여러 줄 20px) | 모바일 상품 카드 이름·가격 |
| body-12 | 12 | 700 / 600 / 400 | 14px (여러 줄 18px) | 작은 버튼, 보조 정보 |
| caption-11 | 11 | 700 / 400 | 13px (여러 줄 17px) | "원~" 단위, 작은 꼬리표 |
| label-10 | 10 | 700 / 400 | 12px | 공지 배지 |
| label-8 | 8 | 700 | 10px | 아주 작은 상품 배지 |

- 이름 규칙: `typography-{역할}-{크기}-{굵기}`. 한 줄 자르기용 `-line-clamp-1/2`, 행간을 늘린 `-multiline`, rem이 아닌 px로 고정한 `-fixed` 변형이 있다.
- 한 화면에서 모바일은 한 단계 작은 크기, PC는 한 단계 큰 크기를 쓴다(예: 모바일 subtitle-20 → PC headline-24).

## 4. 간격·레이아웃
- 기본 단위: 2px. 클래스에 2, 4, 6, 8, 10, 12, 16, 20, 24, 40이 쓰인다(gap-2, py-4, px-6, gap-8, mb-10, rounded-12, px-16, px-20, pl-24, px-40).
- 간격 단계: 2, 4, 6, 8, 10, 12, 16, 20, 24, 40
- 화면 좌우 여백(모바일/데스크톱): 홈 모바일 20px, 숙소 서브홈 모바일 16px. 1024px 폭 상세 화면은 40px.
- 그리드: 중단점은 CSS에서 600, 640, 768, 1024, 1280, 1320, 1536px이 보인다. `ds-pc` 접두 규칙은 1024px 이상, `ds-pc-wide`는 1320px 이상에서 적용된다. 1024px 상세 화면은 왼쪽 정보 840px 폭, 객실 카드는 사진 칸과 478px 정보 칸으로 나뉜다. 모바일 가로 스크롤 상품 카드는 폭 109px, 사진 3:4.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| rounded-4 | 4px | 작은 요소 |
| rounded-6 | 6px | 작은 배지·썸네일 |
| rounded-8 | 8px | 모바일 상품 사진, 지역선택 상자 |
| rounded-10 | 10px | 일부 상자 |
| rounded-12 | 12px | 가장 흔한 값. 흰 외곽선 버튼, 공지 띠, 배너, 모바일 썸네일 |
| rounded-16 | 16px | 예약하기 버튼, 날짜·인원 상자, 객실 카드, PC 썸네일 |
| rounded-20 | 20px | 모바일 큰 배너 이미지 |
| rounded-24 | 24px | 바텀시트 상자 |
| rounded-28 | 28px | PC 큰 배너 이미지 |
| rounded-capsule / full | 9999px | 상단 칩, 필터 칩, 배지, 알림받기 버튼, 검색창 |
| shadow-1 | 0 0 8px rgba(0,0,0,.05) | 떠 있는 작은 면 |
| shadow-2 | 0 0 8px rgba(0,0,0,.1) | 홈에서 2곳 관찰 |
| shadow-3 | 0 0 6px rgba(0,0,0,.2) | 진한 그림자 |
| image-edge | inset 0 0 0 1px rgba(0,0,0,.05) | 사진 둘레의 아주 옅은 선 |
| border | 1px #e9eaef 또는 #dadbdf | 카드·칩 외곽선 |

그림자보다 1px 옅은 선과 옅은 회색 면으로 구역을 나눈다.

## 6. 주요 컴포넌트
### 버튼
| 종류 | 크기 | 배경 | 글자 | 테두리 | 모서리 |
|---|---|---|---|---|---|
| 주 버튼(예약하기) | 192×52, 여백 4px 16px | #4154ff | #ffffff 16px/700 | 없음 | 16px |
| 파랑 외곽선(앱에서 보기) | 263×40 | #ffffff | #4154ff 14px/700 | 1px #4154ff | 12px |
| 파랑 외곽선 캡슐(알림받기) | 99×32, 여백 4px 20px | #ffffff | #4154ff 12px/700 | 1px #4154ff | 9999px |
| 흰 외곽선(전체보기 줄) | 335×44, 여백 4px 16px | #ffffff | #1b1c1f 14px | 1px #dadbdf | 12px |
| 검정 외곽선 캡슐(전체 사진) | 153×44 | #ffffff | 14px/700 | 1px #1b1c1f | 9999px |
| 글자 버튼(상세보기) | 높이 25 | 없음 | #1b1c1f 14px/700 | 없음 | 0 |

- 눌림·호버: `hover:bg-interaction-neutral-presshover-weak1`, `active:` 접두로 #f2f3f7 배경을 깐다. 사진 위 버튼은 rgba(0,0,0,.6)로 진해진다.
- 비활성: `aria-disabled:pointer-events-none` 규칙이 있다. 비활성 색은 확인 필요.

### 입력창
- 상단 검색창: 높이 44~48px, 흰 배경, 1.5px #4154ff 테두리(홈), 모서리 9999px, 여백 4px 12px 4px 16px. 입력 글자 16px/700 #1b1c1f, 안내 글자 14px #6e6f73.
- 날짜·인원 선택 상자: 높이 58px, 1px #e9eaef, 모서리 16px, 좌우 20px. 값은 18px/700.
- 지역선택 상자(모바일): 높이 46px, 1px #1b1c1f, 모서리 8px, 왼쪽 24px.

### 카드·리스트
- 모바일 상품 카드: 사진(3:4, 모서리 8~12px, 둘레 .05 검정 선) → 이름 13px → 할인율(빨강 13px/400) + 가격(13px/700) + "원~"(11px/700).
- PC 객실 카드: 1px #e9eaef 테두리, 모서리 16px, 흰 배경. 이름 16px/700, 체크인 정보 14px, 정가 14px #6e6f73 취소선, "회원가" 14px/600 #4154ff, 가격 24px/700, 오른쪽 아래 예약하기 버튼.
- 필터 칩: 높이 42px, 흰 배경, 1px #dadbdf, 9999px, 좌우 16px, 글자 16px/400.

### 상단 바·탭 바
- 모바일 상단 바: 높이 52px, 흰 배경, 그림자 없음.
- 상단 칩 탭: 높이 32px, 최소 폭 44px, 좌우 12px, 9999px. 선택은 #1b1c1f 배경·흰 글자, 나머지는 투명. 새 소식은 5px 파란 점(#4154ff).
- 글자 탭(특가, 쿠폰·혜택 등): 선택 안 됨 16px/400 #6e6f73. 보이지 않는 가상 요소에 16px/700 글자를 미리 깔아 폭을 잡아 둔다. 선택되면 굵어질 때 폭이 흔들리지 않게 하려는 것으로 보인다. 선택 상태 값은 확인 필요.

### 바텀시트·모달
- 앱 유도 시트: 좌우 16px, 아래 20px 띄운 흰 상자, 모서리 24px, 위 여백 40px. 뒤 막은 rgba(0,0,0,.5)(bg-scrim).

### 토스트·스낵바
- 확인 필요. 실측 중에 뜨지 않았다.

## 7. 아이콘·이미지·모션
- 아이콘 스타일·크기: 선형 SVG, 24px 기본. 사진 위 원형 버튼 26px(PC 32px).
- 일러스트·사진 쓰는 방식: 숙소·공연 사진이 크다. 사진은 늘 둥근 모서리와 .05 검정 안쪽 선을 둘러 흰 배경과 섞이지 않게 한다. 공연 포스터는 3:4.
- 모션 길이·이징: CSS에 duration 100·150·200·300·500ms, ease-out cubic-bezier(0,0,.2,1), ease-in-out cubic-bezier(.4,0,.2,1)이 있다. 어느 컴포넌트에 쓰는지는 확인 필요. prefers-reduced-motion 규칙이 있다.

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 짧은 명사형 레이블과 해요체 안내를 섞는다.
- 예시(직접 관찰한 문장 구조만, 원문 복사 금지):
  - 버튼은 "[동사]하기" 꼴(예약하기, 알림받기).
  - 거절 버튼은 사용자 말투로 쓴다: "오늘은 [대안]으로 볼게요" 꼴.
  - 혜택은 숫자를 앞세운다: [결제수단] 결제 시 최대 [금액].
  - 가격 뒤 "원~"으로 최저가임을 짧게 표시한다.

## 9. AI에 넣을 때
```
놀(NOL, 야놀자) 스타일로 디자인해 줘.
- 주색: #4154ff (연한 배경 #f5f6ff, 연한 테두리 #b2baff)
- 할인·오류: #e5000f
- 글자: #1b1c1f 기본, #6e6f73 보조, #8b8d92 흐림
- 배경: #ffffff, 옅은 면 #f7f8fb, 선 #e9eaef / #dadbdf
- 글꼴: Pretendard, 크기 16/19, 14/17, 13/16, 굵기 400·600·700
- 모서리: 버튼·카드 12~16px, 칩·배지 9999px, 시트 24px
- 간격 단위: 2px 배수(4, 8, 12, 16, 20), 모바일 좌우 16~20px
- 버튼: 주 버튼 #4154ff 흰 글자 16px/700 높이 52, 모서리 16
- 분위기: 그림자 거의 없이 옅은 선과 둥근 사진. 파랑은 행동, 빨강은 할인에만
```

## 10. 참고 자료
- https://nol.yanolja.com/ (확인 2026-10-31, 홈 실측)
- https://nol.yanolja.com/sub-home/hotel?verticalCategory=LOCAL_ACCOMMODATION&verticalSubCategory=HOTEL (확인 2026-10-31, 목록 성격 서브홈 실측)
- https://nol.yanolja.com/stay/domestic/10066964 (확인 2026-10-31, 숙소 상세 실측)
- https://assets.yanolja.com/display-site/b8c98583d1b61e36b2ffb46bdc62769bdb70b104/_next/static/css/04b243d7dc1d04f9.css (확인 2026-10-31, 홈이 불러온 CSS 중 하나. 토큰 클래스 정의를 읽음. 빌드마다 주소가 바뀐다)
- https://yaimg.yanolja.com/joy/sunny/static/fonts/pretendard/pretendard-font-chunks.css (확인 2026-10-31, 글꼴)
- https://github.com/yanolja (확인 2026-10-31, 공개 저장소 2개 중 디자인 시스템 저장소 없음)

### 근거와 한계
- 색·글자 단계·모서리·모션 값은 홈이 불러온 CSS 파일 8개의 클래스 정의에서 읽었다. 실제 쓰임은 위 세 화면의 computed style로 확인했다.
- 실측값은 사이트가 바뀌면 달라질 수 있다. CSS 주소에 빌드 해시가 들어 있어 배포 때마다 바뀐다.
- 앱 화면은 보지 않았다. 다크 모드, 성공·정보 색, 토스트, 비활성 버튼 색은 확인하지 못했다.
- 놀, NOL, 야놀자 이름과 브랜드는 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.
