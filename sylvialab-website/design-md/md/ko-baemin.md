# 배달의민족 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, macOS Chrome 데스크톱 · 창 너비 1362px · Claude in Chrome으로 computed style과 CSS 변수 직접 읽음) + 글꼴은 우아한형제들 공식 글꼴 페이지
> 작성: SylviaLab · 최종 수정 2026-10-31

작업 환경의 셸과 WebFetch로는 baemin.com·woowahan.com에 접속할 수 없었다(robots 차단·접속 오류). 그래서 연결된 Chrome 브라우저에서 공개 페이지를 열고 개발자 도구와 같은 방식으로 값을 읽었다.

## 1. 개요
- 서비스 성격: 우아한형제들이 운영하는 음식·장보기 배달 앱. 주문은 앱에서 하고, 웹(baemin.com)은 앱을 소개하는 한 장짜리 안내 페이지다.
- 디자인 인상 한 줄: 민트(#0cefd3)를 넓은 면으로 깔고 검정 글자를 크게 올린다. 버튼은 민트 채움에 검정 글자, 또는 검정 채움에 흰 글자 두 가지다.
- 공식 시스템 이름: 공개된 이름 없음. 웹 CSS에 `ref`(원색) → `sem`(의미) → `com`(컴포넌트) 3층 변수 구조가 들어 있다. 의미 층은 `mint`와 `base` 두 테마가 있다.
- 특징
  - baemin.com 한 페이지에 CSS 변수가 1,746개 실려 있다. 컴포넌트 토큰만 테마당 600개 안팎이다.
  - 글자 크기는 7단계 크기 설정(접근성용) 클래스로 바뀐다. 실측 시 body에 붙은 단계는 4번째 클래스였다.
  - 브랜드 글꼴(한나체, 주아체, 을지로체 등)은 제목·광고 문구에만 쓰고, 화면 본문은 시스템 글꼴을 쓴다.
  - 공식 글꼴 12종은 회사가 무료로 배포한다.

## 2. 색상
값은 baemin.com에 실린 CSS 변수(`--ref-color-*`, `--sem-mint-color-*`, `--com-mint-*`)에서 읽었다. 다크 모드 변수 묶음은 찾지 못했다.

### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| mint5 (systemMainPrimary) | #0cefd3 | 확인 필요 | 주 버튼 채움, 안내 페이지 전체 배경, 큰 제목 글자 |
| mint6 (systemMainSecondary) | #00c9b9 | 확인 필요 | 포커스 테두리, 입력 커서 |
| mint1 (systemMainTertiary) | #e6fff8 | 확인 필요 | 연한 민트 면 |
| mint2 | #b0ffeb | 확인 필요 | 원색 단계 |
| mint3 | #87ffe5 | 확인 필요 | 원색 단계 |
| mint4 | #35fcdf | 확인 필요 | 원색 단계 |
| mint7 | #00a39b | 확인 필요 | 원색 단계 |
| mint8 | #007d7b | 확인 필요 | 원색 단계 |
| blue5 (systemSubPrimary) | #1a7cff | 확인 필요 | 보조 강조(링크·정보) |
| blue6 (systemSubSecondary) | #086ade | 확인 필요 | 보조 강조 진한 단계 |
| purple5 (benefitPrimary) | #5f57ff | 확인 필요 | 혜택·할인 표시 |
| pink5 | #f13fa1 | 확인 필요 | 숫자 배지(countBadge) 채움 |

### 중립(회색 단계)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| white | #ffffff | surfaceContainer(카드·시트 면), 반전 글자 |
| gray1 | #f3f5f7 | backgroundPrimary(화면 바탕) |
| gray2 | #e4e6e8 | 원색 단계 |
| gray3 | #d5d7d9 | 원색 단계 |
| gray4 | #b1b3b5 | 푸터 회사 정보 글자(실측) |
| gray5 | #97999b | 원색 단계 |
| gray6 | #7e8082 | 푸터 보조 글자(실측) |
| gray7 | #646668 | 원색 단계 |
| gray8 | #4b4d4f | 원색 단계 |
| gray9 | #313335 | 원색 단계 |
| gray10 | #26282a | 원색 단계 |
| gray11 | #1e2022 | 원색 단계 |
| gray12 | #181a1c | foregroundPrimary(본문 글자), borderPrimary |
| black | #000000 | fillInverted(검정 버튼), 안내 페이지 푸터 배경 |

글자 색은 gray12에 투명도를 걸어 단계를 만든다(mint 테마 기준).

| 의미 토큰 | 값 | 쓰임 |
|---|---|---|
| foregroundPrimary | #181a1c | 제목·본문 |
| foregroundSecondary | rgba(24,26,28,.78) | 보조 글자 |
| foregroundTertiary | rgba(24,26,28,.56) | 설명, 입력 placeholder |
| foregroundQuaternary | rgba(24,26,28,.33) | 약한 글자 |
| foregroundDisabled | rgba(24,26,28,.18) | 비활성 글자 |
| borderSecondary | rgba(24,26,28,.18) | 일반 테두리 |
| borderTertiary | rgba(24,26,28,.11) | 칩 테두리, 약한 테두리 |
| borderQuaternary | rgba(24,26,28,.08) | 가장 약한 테두리 |
| separatorPrimary | rgba(24,26,28,.06) | 리스트 구분선 |
| fillPrimary | rgba(0,0,51,.04) | 회색 버튼·검색창 채움 |
| fillSecondary | rgba(0,0,20,.1) | 진한 회색 채움 |
| fillHovered | rgba(0,0,0,.04) | hover 겹침 |
| fillPressed | rgba(0,0,0,.08) | 눌림 겹침 |
| overlayPrimary | rgba(0,0,0,.5) | 모달 뒤 딤 |

`base` 테마는 같은 이름에 조금 더 옅은 값을 쓴다(예: foregroundSecondary .56, overlayPrimary .3).

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success (positivePrimary = green5) | #00b96b | 완료, 긍정 |
| warning (warningPrimary = orange5) | #ff8400 | 주의 |
| error (negativePrimary = red5) | #ff403e | 오류, 삭제 |
| info (systemSubPrimary = blue5) | #1a7cff | 정보, 링크 |
| positiveSecondary (green6) | #009f5c | 성공 진한 단계 |
| negativeSecondary (red6) | #e52420 | 오류 진한 단계 |
| warningSecondary (orange6) | #ff6610 | 주의 진한 단계 |
| 각 Tertiary | green1 #edfdf4 · red1 #ffeeef · orange1 #fff5ed · blue1 #edf7ff · purple1 #eef0ff | 연한 배경(인라인 배지 등) |

### 그 밖의 원색 단계(1→8)
| 계열 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| blue | #edf7ff | #d7eaff | #77bbff | #449bff | #1a7cff | #086ade | #0f59b7 | #09356f |
| green | #edfdf4 | #c6f6dc | #77e6af | #3bd28d | #00b96b | #009f5c | #00844d | #00502e |
| orange | #fff5ed | #ffe4cf | #ffba77 | #ff9e3b | #ff8400 | #ff6610 | #bb4500 | #6e2800 |
| red | #ffeeef | #ffdadb | #ff8b8d | #ff6262 | #ff403e | #e52420 | #bb2523 | #6f1a19 |
| pink | #ffeefa | #ffdbf1 | #ff8cd1 | #fd63ba | #f13fa1 | #d2308b | #af2874 | #6b1646 |
| purple | #eef0ff | #d9dbff | #9ca5ff | #7476ff | #5f57ff | #4d1aff | #3605c6 | #26246e |
| yellow | #fffced | #fff2b2 | #ffe677 | #ffd73b | #ffc600 | #dbaa00 | #b68e00 | #6e5500 |
| brown | #fbf5f1 | #f2e6de | #d6b29b | #c19374 | #a8744f | #906444 | #785339 | #483222 |

(blue3은 CSS에 `#7bf` 줄임형으로 적혀 있어 #77bbff로 풀었다.)

## 3. 타이포그래피
- 글꼴(화면): mint 테마 글자 토큰의 글꼴은 `system-ui, sans-serif`. baemin.com 본문 계산값은 `-apple-system, system-ui, "Segoe UI", Roboto, …` 순서의 시스템 글꼴 묶음이었다.
- 글꼴(브랜드): 안내 페이지 큰 문구(72px)는 `BAEMINWORK`라는 웹폰트로 그려진다. 공식 배포 글꼴은 아래 표.
- 대체 글꼴: sans-serif
- 자간: 모든 글자 토큰의 tracking이 0px.
- 행간: 제목·라벨류는 "크기 + 약 8%"(예: 22px → 22+1.8px)로 촘촘하고, 본문·설명류는 1.5배(14px → 21px)다.

### 글자 단계 (mint 테마, body에 적용된 4번째 크기 설정 기준)
| 단계 | 크기(px) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| displayLarge | 44 | 700 | 59px | 가장 큰 숫자·표제 |
| displayMedium | 41 | 700 | 55px | 표제 |
| displaySmall | 36 | 700 | 48px | 표제 |
| headlineLarge | 32 | 700 | 40px | 화면 큰 제목 |
| headlineMedium | 29 | 700 | 36px | 화면 제목 |
| headlineSmall | 26 | 700 | 33px | 화면 제목 |
| subheadingLarge | 22 | 700 | 26px | 섹션 제목 |
| subheadingMedium | 20 | 700 | 24px | 섹션 제목 |
| subheadingSmall | 18 | 700 | 22px | 섹션 제목 |
| titleLarge | 22 | 700 | 23.8px | 카드·시트 제목 |
| titleMedium | 20 | 700 | 21.6px | 카드 제목 |
| titleSmall | 18 | 700 | 19.5px | 리스트 제목 |
| bodyLarge | 16 | 400 | 24px | 본문 큰 |
| bodyMedium | 14 | 400 | 21px | 기본 본문 |
| bodySmall | 12 | 400 | 18px | 작은 본문 |
| labelLarge | 16 | 400 (Emphasized 700) | 17.3px | 큰 버튼 글자 |
| labelMedium | 14 | 400 (Emphasized 700) | 15.2px | 중간 버튼 글자 |
| labelSmall | 12 | 400 (Emphasized 700) | 13px | 작은 버튼·칩 글자 |
| captionLarge | 12 | 400 | 13px | 보조 설명 |
| captionMedium | 11 | 400 | 11.9px | 보조 설명 |
| captionSmall | 10 | 400 | 10.8px | 가장 작은 글자 |
| footnote | 11 | 400 | 15px | 각주 |
| detail | 10 | 400 | 13px | 세부 정보 |

크기 설정을 한 단계 올리면 같은 토큰이 커진다. 예: bodyMedium은 단계별로 12·13·14·15·17·19·20px. 버튼은 small/medium/large에 labelSmall/Medium/Large의 Emphasized(700)를 쓴다.

### 안내 페이지(baemin.com) 실측 글자
| 쓰임 | 크기 | 굵기 | 행간 | 글꼴 |
|---|---|---|---|---|
| 큰 광고 문구 | 72px | 400 | 100.8px(1.4) | BAEMINWORK |
| 첫 화면 민트 문구 | 60px | 800 | 84px | 시스템 |
| 문구 아래 설명 | 20px | 600 | 29px | 시스템 |
| 푸터 링크 큰 글자 | 30px | 700 | 39px | 시스템 |
| 푸터 회사 정보 | 14px | 400 | 19.6px | 시스템 |

### 공식 배포 글꼴 (woowahan.com/fonts)
| 이름 | 공개 연도 |
|---|---|
| 한나체 | 2012 |
| 주아체 | 2014 |
| 도현체 | 2015 |
| 연성체 | 2016 |
| 기랑해랑체 | 2017 |
| 한나체 Air · 한나체 Pro | 2018 |
| 을지로체 | 2019 |
| 을지로10년후체 | 2020 |
| 을지로오래오래체 | 2021 |
| 글림체 | 2022 |
| 꾸불림체 | 2024 |
| 한나는열한살체 | 2015년 한나체 개편판 |

- 라이선스 메모: 우아한형제들이 지식재산권을 갖는다. 개인·기업 모두 상업적 사용, 수정, 재배포가 된다. 글꼴 파일 자체를 돈 받고 파는 것은 안 된다. 쓰기 전에 공식 라이선스 문서를 다시 확인할 것.

## 4. 간격·레이아웃
- 기본 단위: 8px. 반 단위 4px, 미세 조정 1·2·6·10px.
- 간격 단계(`--ref-spacing-*`):

| 토큰 | 값 | 토큰 | 값 |
|---|---|---|---|
| spacing-1 | 1px | spacing-400 | 32px |
| spacing-25 | 2px | spacing-500 | 40px |
| spacing-50 | 4px | spacing-600 | 48px |
| spacing-75 | 6px | spacing-700 | 56px |
| spacing-100 | 8px | spacing-800 | 64px |
| spacing-125 | 10px | spacing-900 | 72px |
| spacing-150 | 12px | spacing-1000 | 80px |
| spacing-200 | 16px | spacing-1200 | 96px |
| spacing-250 | 20px | spacing-1500 | 120px |
| spacing-300 | 24px | spacing-2000 | 160px |

- 화면 좌우 여백(모바일): 리스트 항목 좌우 패딩 16px(listItem 토큰). 앱 화면 전체 여백은 확인 필요.
- 화면 좌우 여백(데스크톱): 안내 페이지 본문 폭 1128px(1362px 창에서 실측).
- 그리드: 확인 필요.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-none | 0px | 텍스트 버튼, 전체 화면 시트 |
| radius-xSmall | 2px | 아주 작은 표시 |
| radius-small | 4px | 체크박스, 인라인 배지 |
| radius-medium | 8px | 버튼 small·medium |
| radius-large | 12px | 버튼 large, 칩, 세그먼트 컨트롤, 152×54px 흰 버튼(실측) |
| radius-xLarge | 16px | 안내 페이지 1곳, 쓰임 확인 필요 |
| radius-xxLarge | 20px | 쓰임 확인 필요 |
| radius-rounded | 9999px | 아이콘 버튼, 알약형 링크 버튼 |
| shadow-level1 | 0 2px 8px rgba(0,0,0,.06) | 약한 띄움 |
| shadow-level2 | 0 2px 8px rgba(0,0,0,.12) | 카드 띄움 |
| shadow-level3 | 0 2px 10px rgba(0,0,0,.18) | 팝업·툴팁 |
| 테두리 기본 | 1px, borderTertiary rgba(24,26,28,.11) | 칩, 아웃라인 요소 |
| 포커스 테두리 | 2px(select), mint6 #00c9b9 | 키보드 포커스 |

버튼 토큰은 그림자를 쓰지 않는다(`filledButton-shadow: none`).

## 6. 주요 컴포넌트
컴포넌트 이름과 값은 `--com-mint-*` 변수에서 읽었다. 높이는 변수에 없어서 확인 필요.

### 버튼
| 종류 | 채움 | 글자 | 모서리 | 좌우 패딩 |
|---|---|---|---|---|
| filled · mint | #0cefd3 | #000000 | S·M 8px / L 12px | 확인 필요 |
| filled · black | #000000 | #ffffff | S·M 8px / L 12px | 확인 필요 |
| filled · gray | rgba(0,0,51,.04) | #181a1c | S·M 8px / L 12px | 확인 필요 |
| outlined | 투명 | #181a1c | S·M 8px / L 12px | S 8px · M 12px · L 16px |
| text | 투명 | — | 0px | 0px, 아이콘 간격 2~4px |
| filledIcon | — | — | 9999px | 0px |

- 상태: hover는 rgba(0,0,0,.04), 눌림은 rgba(0,0,0,.08)을 위에 겹친다. 검정 버튼은 흰색 겹침(hover .04, 눌림 .1).
- 포커스: 민트 버튼은 rgba(0,0,0,.38) 테두리, 검정·회색 버튼은 #00c9b9 테두리.
- 글자: 크기별 labelSmall/Medium/Large Emphasized(700).
- 안내 페이지 실측: 알약형 검정 링크 버튼 228×58px, 패딩 16px 32px, 18px/700, 모서리 9999px. 흰 버튼 152×54px(앱 내려받기 버튼으로 보임), 흰 바탕, 모서리 12px, 패딩 14px 19px.

### 입력창
- 검색창(searchField): 채움 rgba(0,0,51,.04), 테두리 없음, placeholder rgba(24,26,28,.56), 커서 #00c9b9, 아이콘·글자 간격 6px.
- 한 줄·여러 줄 입력, 비밀번호 입력(secureField), 선택 상자(select) 토큰이 따로 있다. 선택 상자 포커스 테두리 2px.
- 높이·내부 패딩: 확인 필요.

### 카드·리스트
- 리스트 항목: 패딩 상하좌우 16px, 요소 간격 10px.
- 리스트 머리(listHeader) 토큰 있음. 값은 확인 필요.
- 카드 면: surfaceContainer #ffffff 위에 놓고 바탕은 #f3f5f7.

### 상단 바·탭 바
- 상단 바(topBar): 채움 투명. 높이 확인 필요.
- 탭: 패딩 상하 12px · 좌우 6px, 간격 4px, 선택 안 된 글자 #181a1c. 고정 탭(fixedTabs)과 가로 스크롤 탭(scrollableTabs) 두 종류.
- 세그먼트 컨트롤: 바깥 모서리 12px, 선택 표시 모서리 10px.

### 바텀시트·모달
- 다이얼로그: 아래 여백 90px 토큰이 있다. 나머지 값 확인 필요.
- 전체 화면 시트(fullSheet): 위 모서리 0px.
- 뒤 딤: rgba(0,0,0,.5).

### 토스트·스낵바
- 스낵바: 패딩 상하 12px, 요소 간격 8px, 채움 변수는 투명(실제 배경은 다른 층에서 칠하는 것으로 보임, 확인 필요).

### 그 밖
| 컴포넌트 | 확인한 값 |
|---|---|
| 칩 | 모서리 12px. 선택 시 검정 채움 + 흰 글자, 미선택 시 테두리 rgba(24,26,28,.11) |
| 스위치 | 켜짐 채움 #000000, 꺼짐 손잡이 #ffffff |
| 체크박스 | 모서리 4px |
| 인라인 배지 | 모서리 4px, 패딩 4px. 회색 rgba(0,0,51,.04) · 파랑 #edf7ff · 빨강 #ffeeef |
| 숫자 배지 | 채움 #f13fa1 |
| 툴팁 | 강조형(highlightTooltip)과 정보형(informationTooltip) 두 종류. 값 확인 필요 |

## 7. 아이콘·이미지·모션
- 아이콘 스타일·크기: 확인 필요.
- 일러스트·사진: 안내 페이지는 민트 단색 면 위에 큰 문구와 앱 화면 이미지를 번갈아 놓는다.
- 모션: 스프링 방식 변수가 있다.

| 토큰 | 값 |
|---|---|
| duration-fastest | 0.17 |
| duration-fast | 0.25 |
| duration-default | 0.33 |
| duration-slow | 0.66 |
| bounce-smooth | 0 |
| bounce-snappy | 0.15 |
| bounce-bounce | 0.3 |

길이 단위는 변수에 적혀 있지 않다. 초(s)로 보이지만 확인 필요.

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 짧은 구어체. 같은 말을 두 번 반복해 리듬을 만들고, 낱말 뒤에 하이픈(-)을 붙여 소리를 늘이듯 쓴다. 큰 문구는 명사로 끝나는 경우가 많고, 설명 문장은 "~요", "~니다"로 끝난다.
- 예시(구조만): "[행동]해도 [행동]해도 / [혜택] 무료" 처럼 두 줄로 나누고, 둘째 줄에 핵심 혜택을 둔다. 설명 문장은 20px 한두 줄로 붙인다. 지역 제한 같은 단서는 옅은 글자(투명도 .2)로 별표를 달아 아래에 둔다.

## 9. AI에 넣을 때

```
배달의민족 스타일로 디자인해 줘.
- 주색: 민트 #0cefd3 (보조 #00c9b9), 버튼 글자는 검정 #000000
- 배경: 화면 #f3f5f7, 카드 #ffffff, 본문 글자 #181a1c
- 상태: 성공 #00b96b, 주의 #ff8400, 오류 #ff403e, 혜택 #5f57ff
- 글꼴: 시스템 글꼴(system-ui), 자간 0. 큰 광고 문구만 배민 글꼴(한나체·주아체 등)
- 글자: 본문 14/21, 큰 본문 16/24, 섹션 제목 18~22 bold, 화면 제목 26~32 bold
- 모서리: 버튼 8px(큰 버튼 12px), 칩 12px, 배지 4px, 아이콘 버튼 원형
- 간격 단위: 8px (4·12·16·24·32), 리스트 패딩 16px
- 버튼: 민트 채움+검정 글자 / 검정 채움+흰 글자 / 회색 rgba(0,0,51,.04) 채움
- 그림자: 0 2px 8px rgba(0,0,0,.06~.12)만, 버튼엔 없음
- 분위기: 밝은 민트 면, 큰 굵은 문구, 짧고 재치 있는 말투
```

## 10. 참고 자료
- https://www.baemin.com/ (확인 2026-10-31) — CSS 변수(`--ref-*`, `--sem-mint-*`, `--sem-base-*`, `--com-mint-*`)와 화면 computed style 실측
- https://www.woowahan.com/fonts (확인 2026-10-31) — 공식 글꼴 목록과 공개 연도
- https://www.sandollcloud.com/free-font/626/BM-HANNA-Pro (확인 2026-10-31) — 배민 글꼴 라이선스 요약(권리자 우아한형제들 표기)

### 근거와 한계
- 공식 디자인 시스템 문서는 공개되어 있지 않다. 색·글자·간격·모서리·컴포넌트 값은 모두 baemin.com 안내 페이지에 실린 CSS 변수와 화면 계산값이다.
- 이 변수들이 앱 화면에도 같은 값으로 쓰이는지는 확인하지 못했다. 앱 화면은 열어 보지 않았다.
- 실측은 데스크톱 한 화면(안내 페이지)만 했다. 목록·상세 화면이 웹에 없어 CLAUDE.md의 "최소 3개 화면" 기준을 채우지 못했다. 반복 값 대신 변수 정의를 근거로 삼았다.
- 다크 모드 값, 컴포넌트 높이, 아이콘 규격, 모션 단위는 찾지 못했다.
- 관찰한 값은 사이트가 바뀌면 달라질 수 있다.
- 서비스 이름, 글꼴, 브랜드는 우아한형제들의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.
