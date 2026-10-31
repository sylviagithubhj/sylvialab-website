# 오늘의집 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, Claude 데스크톱 앱 내장 브라우저(Chromium) · 1024px 폭과 375×812 모바일 에뮬레이션, 페이지 루트에 걸린 CSS 변수와 computed style을 읽음. 작업 컨테이너의 셸은 이 사이트에 접속하지 못하고 WebFetch는 robots 규칙으로 막혀 이 방법을 썼다.)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 집 꾸미기 콘텐츠(집들이·집사진·커뮤니티)와 가구·생활용품 쇼핑을 합친 서비스. 운영사는 버킷플레이스.
- 디자인 인상 한 줄: 흰 바탕과 거의 검정 글자(#141414) 위에 하늘색(#00a1ff) 하나로 선택·행동을 표시하고, 할인만 빨강(#ff4650)으로 띄우는 사진 중심 화면.
- 공식 시스템 이름(있으면): 공개 문서는 찾지 못했다. 웹 페이지 루트에 `--ds-` 접두 CSS 변수 약 990개가 걸려 있다. `--ds-core-*`(기초 토큰), `--ds-legacy-core-*`(이전 세대 토큰), `--ds-ext-commerce-*`(쇼핑 전용), 그리고 boxButton·chip·select·snackbar·bottomSheet 같은 컴포넌트 토큰으로 나뉜다. 시스템 이름은 확인 필요.

## 2. 색상
아래 값은 `--ds-core-color-*` 변수에서 읽고, 화면 computed style과 대조했다. 지금 화면 글자 중 상당수(#2f3438, #828c94)는 legacy 토큰에서 온다.

### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| backgroundBrand / foregroundBrand / borderBrand | #00a1ff | 확인 필요 | 바로구매·글쓰기 버튼 배경, 선택된 탭 글자, 장바구니 버튼 테두리와 글자, 탭 밑줄 |
| backgroundBrandWeak | #f0f8fc | 확인 필요 | 연한 브랜드 면 |
| genuineBlue-100 | #ddf3ff | 확인 필요 | 가장 연한 하늘색 |
| genuineBlue-400 | #0497ef | 확인 필요 | 한 단계 진한 하늘색(legacy interactive-primary1-thick도 같은 값) |
| genuineBlue-500 | #007bc5 | 확인 필요 | 진한 하늘색 |
| accentRed | #ff4650 | 확인 필요 | 할인율, 할인가, "특별인증가" 같은 강조 글자 |

genuineBlue 단계는 50(#f0f8fc)부터 950(#010d19)까지 50 간격으로 19단계가 있다. 350이 #00a1ff다.

### 중립(회색 단계)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray-900 / foreground | #141414 | 기본 글자, 상품명, 가격. 진한 테두리(borderStrong), 반전 배경 |
| legacy gray-700 | #2f3438 | 상단 메뉴·탭 글자, 고객센터 카드 글자. 홈 화면에서 가장 많은 글자색 |
| gray-850 | #222222 | 댓글 입력 글자 |
| gray-700 | #444444 | 진한 회색 |
| gray-600 | #5c5c5c | 중간 회색 |
| legacy content-base2 | #828c94 | 시트 보조 문구, "모바일 웹으로 볼래요" 같은 약한 버튼 |
| gray-400 / foregroundWeak | #8c8c8c | 평점·리뷰 수, 선택 안 된 카테고리 경로, 배송 꼬리표 글자 |
| gray-300 | #acacac | 품절 띠 배경, 사진 위 비활성 글자 |
| gray-250 / foregroundDisabled | #c1c1c1 | 비활성 글자, 꺼진 스위치 트랙 |
| gray-200 | #cecece | 댓글 입력 테두리 |
| gray-150 / border | #e0e0e0 | 기본 테두리(흰 버튼, 셀렉트, 쿠폰 꼬리표) |
| legacy content-base4 | #eaedef | 고객센터 카드 테두리, 이미지 자리 배경 |
| gray-100 / backgroundDisabled | #ededed | 비활성 배경 |
| gray-50 / backgroundWeak | #f5f5f5 | 검색창 배경, 비활성 셀렉트 배경 |
| background | #ffffff | 페이지 배경 |
| borderThumbnail | rgba(0,0,0,.05) | 상품 사진 둘레 0.5px 선 |
| backgroundDim | rgba(0,0,0,.4) | 시트·모달 뒤 막 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | #15b869 | accentGreen. 연한 배경 accentGreenWeak #e3fcea |
| warning | #b27800 | foregroundAttention. 배경·테두리 #d19506, 연한 배경 #fcf4dd |
| error | #f05656 | foregroundCritical. 배경·테두리 backgroundCritical #ff7777, 연한 배경 #ffeded |
| info | #0079fa | accentBlue. 연한 배경 accentBlueWeak #eff5fc |

### 쇼핑 전용(ext-commerce)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| foregroundTodayDeals | #ff4747 | 오늘의딜 글자·배경·테두리 |
| foregroundReviewStar | #f7b401 | 별점 별. 꺼진 별 #e8e8e8 |
| accentOhousePick | #31a072 | 오늘의집 추천 표시 |
| foregroundTodayDeparture | #6131d2 | 오늘출발 표시 |
| accentPurple | #6f3dde | 보조 강조. 연한 배경 #f9f1fb |

다크 모드: 다크용 elevation 색(legacy elevation-0 #0b0c0e ~ elevation-70 #2d2e30)은 변수로 있지만 웹에서 다크 화면이나 `prefers-color-scheme` 규칙은 찾지 못했다. 다크 값은 확인 필요.

## 3. 타이포그래피
- 글꼴: Pretendard Variable. assets.ohou.se에서 v1.3.8 dynamic subset을 불러온다. SIL Open Font License 1.1 무료 글꼴. 회사 기술 블로그에 따르면 앱 국내판도 Pretendard를 쓰고 일본판은 Pretendard JP를 쓴다.
- 대체 글꼴: Noto Sans KR, Apple SD Gothic Neo, 맑은 고딕, Malgun Gothic, sans-serif
- 자간: 모든 글자 -0.3px(`--ds-core-letterSpacing-default`). 실측한 글자 272개가 모두 이 값이었다.
- 굵기: regular 400, medium 500, semibold 600, bold 700 네 단계. 모든 크기에 네 굵기가 다 정의되어 있다.

| 단계(토큰 이름) | 크기(px) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| heading32 | 32 | 400~700 | 42px | 상세 화면 판매가 숫자(700) |
| heading26 | 26 | 400~700 | 34px | 큰 제목 |
| heading24 | 24 | 400~700 | 32px | 가격 뒤 "원"(400) |
| heading20 | 20 | 400~700 | 28px | 상세 화면 상품명(400) |
| heading18 | 18 | 400~700 | 24px | 섹션 제목 H2(700), 시트 제목 |
| heading17 | 17 | 400~700 | 22px | 상품 카드 할인율·가격(600) |
| body16L28 | 16 | 400~700 | 28px | 긴 본문 |
| body16L24 | 16 | 400~700 | 24px | 본문 |
| body16L20 | 16 | 400~700 | 20px | 구매 버튼 글자(500), 상단 탭(700) |
| body15L24 | 15 | 400~700 | 24px | 상세 탭 글자(700) |
| body14L20 | 14 | 400~700 | 20px | 셀렉트 글자, 검색 입력 |
| body14L18 | 14 | 400~700 | 18px | 로그인 링크, 작은 버튼 글자(500), 모바일 탭(700) |
| detail13L18 | 13 | 400~700 | 18px | 상품 카드 상품명 |
| detail12L20 | 12 | 400~700 | 20px | 보조 문단 |
| detail12L16 | 12 | 400~700 | 16px | 브랜드명(600), 평점·리뷰 수, 배송 안내 |
| detail11L14 | 11 | 400~700 | 14px | 작은 꼬리표 |
| detail10L14 | 10 | 400~700 | 14px | 배송 배지 글자(500), 시트 보조 문구 |

- 이름 규칙: `heading{크기}`, `body{크기}L{행간}`, `detail{크기}L{행간}`. 같은 크기에 행간이 다른 변형을 따로 둔다.

## 4. 간격·레이아웃
- 기본 단위: 4px. 컴포넌트 변수에 2, 3, 4, 6, 8, 9, 12, 16px이 쓰인다(snackbar 8, select 12, option 8, textarea 12/9/5).
- 간격 단계: 4, 8, 12, 16, 20 (컴포넌트 여백에서 관찰). 공통 spacing 토큰 변수는 찾지 못했다(확인 필요).
- 화면 좌우 여백(모바일/데스크톱): 데스크톱 1024px 폭에서 본문이 왼쪽 60px에서 시작한다. 모바일은 확인 필요.
- 그리드: 1024px 쇼핑 목록은 카드 폭 214px, 사진 214×214 정사각. 상세 화면은 왼쪽 사진, 오른쪽 377px 구매 영역(587px 지점부터)의 두 칸.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| cornerRadius-xs | 2px | 아주 작은 요소 |
| cornerRadius-sm | 4px | 가장 많이 쓰는 값. 배송·쿠폰 꼬리표, 모바일 시트의 주 버튼 |
| cornerRadius-md / lg | 8px | 상품 사진, 구매 버튼, 쿠폰 받기, 셀렉트 |
| select·textarea small | 6px | 작은 셀렉트, "함께 사고 배송비 절약" 버튼 |
| cornerRadius-xl | 12px | 고객센터 카드 |
| cornerRadius-xxl | 16px | 필터 칩(전체 칩 높이 32px) |
| cornerRadius-xxxl | 20px | 큰 카드 |
| cornerRadius-full / circle | 9999px / 50% | 검색창, 프로필 사진 |
| shadow depth10 | 0 2px 5px rgba(0,0,0,.05) | legacy 그림자 1단계 |
| shadow depth20 | 0 2px 5px rgba(0,0,0,.1) | 2단계 |
| shadow depth30 | 0 4px 10px rgba(0,0,0,.12) | 3단계 |
| 홈 실측 | 0 2px 5px rgba(0,0,0,.15) | 홈 화면 7곳에서 관찰 |
| 스크랩 버튼 | 0 1px 3px rgba(0,0,0,.36) | 사진 위 스크랩 아이콘 그림자 |
| border | 1px #e0e0e0 | 기본 외곽선 |
| thumbnail | 0.5px rgba(0,0,0,.05) | 사진 둘레 |

## 6. 주요 컴포넌트
### 버튼
| 종류 | 크기 | 배경 | 글자 | 테두리 | 모서리 |
|---|---|---|---|---|---|
| 주 버튼(바로구매) | 112×48 | #00a1ff | #ffffff 16px/500 | 1px 투명 | 8px |
| 브랜드 외곽선(장바구니) | 112×48 | #ffffff | #00a1ff 16px/500 | 1px #00a1ff | 8px |
| 회색 외곽선(패키지 담기) | 137×48 | #ffffff | #141414 16px/500 | 1px #e0e0e0 | 8px |
| 작은 외곽선(쿠폰 받기) | 94×40 | #ffffff | #141414 14px/500 | 1px #e0e0e0 | 8px |
| 아주 작은 외곽선 | 높이 28 | #ffffff | | 1px #e0e0e0 | 6px |
| 헤더 글쓰기 | 83×40 | #00a1ff | #ffffff 14px/500 | | 8px |
| 모바일 시트 주 버튼 | 303×44, 좌우 16px | #00a1ff | #ffffff 14px | 없음 | 4px |

- 눌림: `:active`에서 `transform: scale(0.97)`. 전환은 transform 0.111s cubic-bezier(0.2, 0, 0.2, 1.05).
- 눌림·호버 겹침 색(boxButton): 일반 hover rgba(20,20,20,.04), pressed rgba(20,20,20,.08). 브랜드 버튼 위 hover #00a1ff 4%, pressed 8%. 진한 배경 위는 흰색 8%·10%.
- 비활성·로딩: `data-disabled`, `data-loading` 속성일 때 눌림 효과를 끈다. 비활성 배경 #ededed, 글자 #c1c1c1.

### 입력창
- 상단 검색창: 204×38, 배경 #f5f5f5, 1px 투명 테두리, 9999px, 좌우 10px. 입력 글자 14px/20px #141414.
- 셀렉트(옵션 선택): 높이 40px(작은 것 32px), 1px #e0e0e0, 모서리 8px(작은 것 6px), 왼쪽 12px·오른쪽 40px(화살표 자리), 글자 14px. 선택 전 글자 #8c8c8c. 앞 단계 미선택으로 막힌 셀렉트는 배경 #f5f5f5, 글자 #c1c1c1.
- 옵션 목록 줄: 최소 높이 48px(작은 것 40px), 여백 8px, 아이콘 20px.
- 여러 줄 입력(textarea): 1px 테두리, 좌우 12px, 위아래 9px(작은 것 5px).

### 카드·리스트
- 상품 카드(쇼핑 목록): 사진 정사각, 모서리 8px, 0.5px rgba(0,0,0,.05) 둘레선, 사진 자리 배경 #eaedef. 아래로 브랜드명(12px/600) → 상품명(13px/18px, 2줄) → 강조 문구(12px/500 #ff4650) → 할인율(17px/600 #ff4650)+가격(17px/600 #141414) → 평점·리뷰(12px #8c8c8c) → 배송 안내(12px #00a1ff) → 꼬리표.
- 꼬리표(squareBadge): 높이 16/20/24px 세 크기, 좌우 3/4/6px. 회색형은 rgba(0,0,0,.05) 배경에 #8c8c8c 10px/500. 외곽선형은 흰 배경에 1px #e0e0e0. 색 꼬리표 배경은 각 색 8%(초록·노랑은 13%).
- 고객센터 카드: 1px #eaedef, 모서리 12px, 여백 12px 16px 12px 20px.

### 상단 바·탭 바
- 데스크톱 1단 메뉴: 18px/700, 선택 #00a1ff, 나머지 #2f3438, 글자 상자 여백 4px·모서리 3px.
- 2단 메뉴: 16px/700, 같은 색 규칙.
- 상세 탭(상품정보·리뷰·문의·배송/환불): 칸 109×54, 여백 14px 10px 16px, 글자 15px/700. 선택 #00a1ff, 나머지 #2f3438, 숫자는 #8c8c8c. 아래 2px #00a1ff 선.
- 모바일 쇼핑 탭: 14px/700, 선택 #00a1ff.

### 바텀시트·모달
- 토큰: 손잡이 32×4px, 손잡이 영역 높이 24px, 헤더 좌우 8px, 헤더 버튼 최소 폭 40px.
- 모바일 앱 유도 시트: 위쪽만 8px 둥근 흰 상자, 제목 18px/700 #2f3438, 뒤 막 rgba(33,38,41,.5).

### 토스트·스낵바
- 토큰: 높이 48~160px, 여백 8px, 가운데 글자 여백 8px 4px, 아이콘 16px(감싸는 여백 6px). 색과 위치는 확인 필요.

### 그 밖
- 스위치: 꺼짐 트랙 #c1c1c1. 켜짐 색은 확인 필요.
- 포커스 링: #141414. 달력 날짜 버튼 40px, 오늘 표시 점 5px.
- 캐러셀 점: 꺼진 점 rgba(20,20,20,.24), 사진 위 꺼진 점 rgba(255,255,255,.72).

## 7. 아이콘·이미지·모션
- 아이콘 스타일·크기: 선형 아이콘. 셀렉트 화살표·옵션 아이콘 20px, 셀렉트 왼쪽 아이콘 18px, 꼬리표 아이콘 12~14px.
- 일러스트·사진 쓰는 방식: 사용자가 올린 집 사진과 상품 사진이 화면 대부분이다. 사진은 정사각에 가깝게 자르고 8px 모서리와 아주 옅은 둘레선을 쓴다.
- 모션 길이·이징: 버튼 눌림 0.111s cubic-bezier(0.2, 0, 0.2, 1.05) scale(0.97). 버튼 위 겹침 색 background-color 0.1s ease-in-out. 768px 이상 hover 기기에서 일부 아이콘이 scale(1.1)로 커진다.

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 해요체. 사용자 입장의 짧은 문장을 쓴다.
- 예시(직접 관찰한 문장 구조만, 원문 복사 금지):
  - 남은 혜택 알림: "받지 않은 [무엇]이 더 있어요" 꼴.
  - 거절 버튼을 사용자 말로: "[대안]으로 볼래요" 꼴.
  - 배송 안내는 조건을 앞에: [요일 시각]까지 결제시 [결과].
  - 버튼은 명사 또는 "[명사] 받기" 꼴(장바구니, 바로구매, 쿠폰 받기).

## 9. AI에 넣을 때
```
오늘의집 스타일로 디자인해 줘.
- 주색: #00a1ff (연한 면 #f0f8fc)
- 할인: #ff4650, 오류 #f05656, 성공 #15b869
- 글자: #141414 기본, #2f3438 메뉴, #8c8c8c 보조, #c1c1c1 비활성
- 배경: #ffffff, 약한 면 #f5f5f5, 테두리 #e0e0e0
- 글꼴: Pretendard Variable, 자간 -0.3px, 크기 17/22, 16/20, 14/18, 13/18, 12/16
- 모서리: 꼬리표 4px, 버튼·사진 8px, 카드 12px, 검색창 9999px
- 간격 단위: 4px
- 버튼: 높이 48, 모서리 8, 주 버튼 #00a1ff 흰 글자 16px/500, 누르면 scale 0.97
- 분위기: 사진이 주인공. 하늘색은 선택·행동에만, 빨강은 할인에만
```

## 10. 참고 자료
- https://ohou.se/ (확인 2026-10-31, 홈 실측과 `--ds-` CSS 변수 읽기)
- https://ohou.se/store (확인 2026-10-31, 쇼핑 목록 실측, store.ohou.se로 이동)
- https://ohou.se/productions/767440/selling (확인 2026-10-31, 상품 상세 실측)
- https://asset.ohousecdn.com/_m/common/web/assets/root-BwqYxuUX.css (확인 2026-10-31, 홈이 불러온 스타일시트 중 하나. 빌드마다 주소가 바뀐다)
- https://assets.ohou.se/fonts/pretendard/v1.3.8/pretendardvariable-dynamic-subset.css (확인 2026-10-31, 글꼴)
- https://www.bucketplace.com/post/2026-04-17-%EB%A9%80%ED%8B%B0-%EA%B5%AD%EA%B0%80-%EC%95%B1%EC%97%90%EC%84%9C-pretendard-jp-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0/ (확인 2026-10-31, 버킷플레이스 기술 블로그. 앱 글꼴 사실만 참고)
- https://github.com/bucketplace (확인 2026-10-31, 공개 저장소 12개 중 디자인 시스템 저장소 없음)

### 근거와 한계
- 색·글자 단계·모서리·컴포넌트 수치는 페이지 루트의 `--ds-` CSS 변수에서 읽었다. 실제 쓰임은 위 세 화면의 computed style로 확인했다.
- 실측값은 사이트가 바뀌면 달라질 수 있다. 지금 웹은 legacy 토큰과 새 토큰을 함께 쓰고 있어 같은 역할에 다른 값이 보일 수 있다(예: 글자 #141414와 #2f3438).
- 공식 브랜드 페이지(events.ohou.se/brand)는 열지 못했다. 앱 화면, 다크 모드, 스낵바 색, 모바일 좌우 여백은 확인하지 못했다.
- 오늘의집 이름과 브랜드는 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.
