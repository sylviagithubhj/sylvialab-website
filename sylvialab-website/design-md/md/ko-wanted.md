# 원티드 디자인 시스템

> 근거: 공개 문서 기반 (Montage 공식 문서 montage.wanted.co.kr, 오픈소스 저장소 wanteddev/montage-web의 theme·core 패키지)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 채용·커리어 플랫폼. 웹과 앱을 함께 운영하고, 한국어와 일본어 서비스를 같은 시스템으로 만든다.
- 디자인 인상 한 줄: 아주 연한 푸른 회색 위에 선명한 파랑(#0066ff) 하나, 테두리와 면은 회색의 투명도로 얇게 그린다.
- 공식 시스템 이름: Montage (원티드랩 디자인 시스템, 저장소 라이선스 MIT)
- 구조: 원시 색 팔레트(`atomic`) → 역할 색(`semantic`). 역할은 foreground(글자·아이콘), background, surface(면), line(선), effect(딤·투명) 다섯 갈래다.
- 특징
  - 회색은 순수 회색(neutral)과 약간 푸른 회색(coolNeutral) 두 줄이 있고, UI 글자·면은 coolNeutral을 쓴다.
  - 선과 약한 면은 #70737c에 투명도를 줘서 만든다. 배경색이 달라도 같은 농도로 보인다.
  - 투명도는 정해진 단계만 쓴다: 0, 5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97, 100(%).
  - 누름·호버 효과는 색을 바꾸지 않고, 요소 위에 같은 색 막을 깔아 투명도만 올린다.

## 2. 색상
### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| surface.brand.primary | #0066ff (blue 50) | #3385ff (blue 60) | 주요 버튼 배경 |
| surface.brand.strong | #005eeb (blue 45) | #1a75ff (blue 55) | 진한 브랜드 면 |
| surface.brand.heavy | #0054d1 (blue 40) | #0066ff | 가장 진한 브랜드 면 |
| surface.brand.subtle | #0066ff0d | #3385ff0d | 선택된 칩 배경 |
| foreground.brand.primary | #0066ff | #3385ff | 브랜드 글자, 아웃라인 버튼 글자, 하단 탭 선택 |
| line.brand.primary | #0066ff47 | #3385ff47 | 선택된 칩 테두리 |
| line.brand.strong | #0066ff6e | #3385ff6e | 입력창 포커스 테두리 |
| line.brand.focus | #0066ff1f | #3385ff1f | 입력창 포커스 바깥 4px 링 |

blue 팔레트: 10 #001536 · 20 #002966 · 30 #003e9c · 40 #0054d1 · 45 #005eeb · 50 #0066ff · 55 #1a75ff · 60 #3385ff · 65 #4f95ff · 70 #69a5ff · 80 #9ec5ff · 90 #c9defe · 95 #eaf2fe · 99 #f7fbff

### 중립(회색 단계)
coolNeutral 팔레트: 5 #0f0f10 · 7 #141415 · 10 #171719 · 15 #1b1c1e · 17 #212225 · 20 #292a2d · 22 #2e2f33 · 23 #333438 · 25 #37383c · 30 #46474c · 40 #5a5c63 · 50 #70737c · 60 #878a93 · 70 #989ba2 · 80 #aeb0b6 · 90 #c2c4c8 · 95 #dbdcdf · 96 #e1e2e4 · 97 #eaebec · 98 #f4f4f5 · 99 #f7f7f8

| 토큰 | 라이트 HEX | 다크 HEX | 쓰임 |
|---|---|---|---|
| foreground.neutral.strong | #000000 | #ffffff | 선택된 탭 등 가장 진한 글자 |
| foreground.neutral.primary | #171719 | #f7f7f8 | 본문 |
| foreground.neutral.secondary | #2e2f33e0 | #c2c4c8e0 | 보조 글자, 회색 버튼 글자 |
| foreground.neutral.tertiary | #37383c9c | #aeb0b69c | 설명, 선택 안 된 탭 |
| foreground.neutral.quaternary | #37383c47 | #aeb0b647 | 아주 흐린 글자 |
| foreground.inactive.primary | #989ba2 | #5a5c63 | 하단 탭 비선택 |
| foreground.disable.primary | #37383c29 | #989ba229 | 비활성 글자 |
| background.neutral.primary | #ffffff | #1b1c1e | 화면 바탕 |
| background.neutral.secondary | #f7f7f8 | #0f0f10 | 회색 바탕 |
| surface.neutral.secondary | #70737c14 | #70737c38 | 회색 버튼 면 |
| surface.neutral.tertiary | #70737c0d | #70737c1f | 칩 면, 비활성 입력창 |
| surface.neutral.strong | #70737c29 | #70737c47 | 진한 회색 면 |
| surface.neutral.inverse | #1b1c1e | #ffffff | 토스트 바탕(반투명으로) |
| surface.elevated.primary | #ffffff | #212225 | 떠 있는 면 |
| surface.disable.primary | #f4f4f5 | #2e2f33 | 비활성 버튼 면 |
| line.neutral.primary | #70737c38 | #70737c52 | 진한 구분선 |
| line.neutral.secondary | #70737c29 | #70737c47 | 입력창·아웃라인 버튼 테두리 |
| line.neutral.tertiary | #70737c14 | #70737c38 | 약한 구분선, 하단 탭 위 선 |
| line.neutral.*Opaque | #e1e2e4 / #eaebec / #f4f4f5 | #37383c / #333438 / #2e2f33 | 투명도를 못 쓸 때 대신하는 불투명 선 |
| effect.dimmer.primary | #17171985 | #171719bd | 모달 뒤 딤 |

### 상태
| 토큰 | 라이트 HEX | 다크 HEX | 쓰임 |
|---|---|---|---|
| success (foreground.positive) | #00bf40 | #1ed45a | 성공 글자·아이콘 |
| success 면 (surface.positive) | #00bf4014 | #1ed45a14 | 성공 안내 바탕 |
| warning (foreground.cautionary) | #ff9200 | #ffa938 | 주의 글자·아이콘 |
| warning 면 (surface.cautionary) | #ff920014 | #ffa93814 | 주의 바탕 |
| error (foreground.negative) | #ff4242 | #ff6363 | 오류 글자 |
| error 진한 글자 (negative.strong) | #e52222 | #ff6363 | 위험 버튼 글자 |
| error 면 (surface.negative.strong) | #ff42421f | #ff636338 | 위험 버튼 면 |
| error 선 (line.negative.primary) | #ff42426e | #ff63636e | 오류 입력창 테두리 |
| info | 확인 필요 | 확인 필요 | 정보 상태는 브랜드 파랑을 쓴다(섹션 메시지 기준) |

### 보조 색
글자용 accent: lime, cyan, lightBlue, violet, purple, pink. 각 색은 8% 면과 43% 선, 불투명 면(`…Opaque`)을 함께 둔다. 원시값은 저장소 atomic 폴더 참고.

## 3. 타이포그래피
- 글꼴: Pretendard JP(SIL OFL). 한국어·영어·일본어를 한 글꼴로 맞추려고 JP 판을 기본으로 쓴다. 웹은 jsDelivr의 dynamic subset CSS로 불러오도록 안내한다.
- 대체 글꼴: 확인 필요(코드에 전체 font-family 순서 정의를 찾지 못함)
- 브랜드 서체 Wanted Sans는 공식 문서에서 별도로 소개한다. UI 기본 글꼴은 Pretendard JP다.
- 크기·행간은 rem 단위. 아래 px는 1rem = 16px 기준.
- 굵기: display·title은 regular 400 / medium 500 / bold 700. heading 이하는 bold가 600이다.
- 자간: 큰 글자는 좁히고(-3.19%), 작은 글자는 넓힌다(+3.11%). 17px(headline2)에서 0이다.
- 긴 글을 읽는 곳은 `Reading` 변형으로 행간만 넓힌다.
- 줄바꿈: 개발 시 음절 단위로 줄이 바뀌므로 디자인에서 따로 줄바꿈하지 않아도 된다고 문서가 설명한다.

| 단계 | 크기(px) | 굵기 | 행간(px) | 자간 | 쓰임 |
|---|---|---|---|---|---|
| display1 | 56 | 400/500/700 | 72 | -0.0319em | 랜딩 큰 제목 |
| display2 | 40 | 400/500/700 | 52 | -0.0282em | 큰 제목 |
| display3 | 36 | 400/500/700 | 48 | -0.027em | 큰 제목 |
| title1 | 32 | 400/500/700 | 44 | -0.0253em | 페이지 제목 |
| title2 | 28 | 400/500/700 | 38 | -0.0236em | 페이지 제목 |
| title3 | 24 | 400/500/700 | 32 | -0.023em | 섹션 제목 |
| heading1 | 22 | 400/500/600 | 30 | -0.0194em | 섹션 제목 |
| heading2 | 20 | 400/500/600 | 28 | -0.012em | 카드 제목 |
| headline1 | 18 | 400/500/600 | 26 | -0.002em | 소제목 |
| headline2 | 17 | 400/500/600 | 24 | 0 | 탭(중·대) |
| body1 | 16 | 400/500/600 | 24 | 0.0057em | 본문 |
| body1-reading | 16 | 400/500/600 | 26 | 0.0057em | 긴 본문 |
| body2 | 15 | 400/500/600 | 22 | 0.0096em | 큰 버튼, 큰 입력창, 작은 탭 |
| body2-reading | 15 | 400/500/600 | 24 | 0.0096em | 긴 본문 |
| label1 | 14 | 400/500/600 | 20 | 0.0145em | 중간 버튼, 중간 입력창, 큰 칩 |
| label1-reading | 14 | 400/500/600 | 22 | 0.0145em | 설명 |
| label2 | 13 | 400/500/600 | 18 | 0.0194em | 중간 칩, 카드 메타 |
| caption1 | 12 | 400/500/600 | 16 | 0.0252em | 작은 버튼, 작은 칩 |
| caption2 | 11 | 400/500/600 | 14 | 0.0311em | 가장 작은 칩 |

## 4. 간격·레이아웃
- 기본 단위: 4px. 시각 보정이 필요하면 2px, 피할 수 없을 때만 1px 단위로 움직인다(공식 문서 원칙).
- 간격 단계: 0, 0.5, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80 (px)
- 화면 좌우 여백(모바일): 20px. 탭 목록 기본 좌우 여백과 컬럼 간격이 모두 20px이다.
- 그리드: 컬럼 사이 20px, 해상도에 따라 컬럼을 합쳐 쓴다. 모바일 2단, 태블릿 3단. 데스크톱 컬럼 수는 확인 필요.

| 구간 | 너비 | 대상 | 최대 콘텐츠 너비 |
|---|---|---|---|
| xs | 0–768px | 모바일 | - |
| sm | 768–992px | 태블릿 세로 | - |
| md | 992–1200px | 태블릿 가로 | - |
| lg | 1200–1600px | 데스크톱 | 1100px(여백 포함) |
| xl | 1600px 이상 | 대형 데스크톱 | 1440px(여백 포함) |

대표 작업 화면 크기: 웹 데스크톱 1440×960px(콘텐츠 1100px), 웹 모바일 375×635px, iOS 375×812pt, Android 360×800dp.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius 4 | 4px | 작은 요소 |
| radius 8 | 8px | xsmall 버튼·칩, 중간 입력창 안 버튼 |
| radius 10 | 10px | small 버튼, small·medium 칩 |
| radius 12 | 12px | medium 버튼, 중간 입력창, large 칩, 토스트·스낵바 |
| radius 14 | 14px | large 버튼, 큰 입력창 |
| radius 16 / 20 | 16 / 20px | 카드류 |
| radius 24 | 24px | 팝업 모달 |
| radius 28 | 28px | 큰 면 |
| radius 32 | 32px | 바텀시트 위쪽 모서리 |
| radius full | 9999px | 원형 |

그림자(색은 #171717에 투명도):

| 토큰 | 값 |
|---|---|
| shadow.normal.xsmall | 0 1px 2px -1px #1717171a |
| shadow.normal.small | 0 2px 4px -2px #1717170f, 0 4px 6px -1px #1717170f |
| shadow.normal.medium | 0 4px 6px -2px #17171712, 0 10px 15px -3px #17171712 |
| shadow.normal.large | 0 6px 10px -4px #17171714, 0 16px 24px -6px #17171714 |
| shadow.normal.xlarge | 0 10px 15px -5px #1717171a, 0 24px 38px -10px #1717171f |
| shadow.spread.small | 0 0 60px 0 #1717171a |
| shadow.spread.medium | 0 15px 75px 0 #17171729 (바텀시트) |

- 테두리는 `border` 대신 `box-shadow: inset 0 0 0 1px`로 그린다. 기본 색 line.neutral.secondary(#70737c29).
- 그림자에는 `filter: drop-shadow` 판(drop.xsmall~xlarge)도 따로 있다. 투명 이미지 둘레에 쓴다.

## 6. 주요 컴포넌트
### 버튼
| 크기 | 최소 높이 | 안 여백 | 글자 | 모서리 | 아이콘 |
|---|---|---|---|---|---|
| large | 48px | 13px 20px | 15px / 600 | 14px | 16px |
| medium | 40px | 10px 16px | 14px / 600 | 12px | 14px |
| small | 32px | 8px 12px | 12px / 600 | 10px | 12px |
| xsmall | 28px | 6px 10px | 12px / 600 | 8px | 12px |

- solid primary: #0066ff 면 + 흰 글자.
- solid assistive: #70737c14 면 + #2e2f33e0 글자.
- solid negative: #ff42421f 면 + #e52222 글자.
- outlined primary: 투명 면 + 1px #70737c29 선 + 파란 글자. outlined assistive는 같은 선에 #171719 글자.
- 아이콘과 글자 사이 4px(large 6px).
- 호버: 위에 깐 막의 투명도 5%, 누름 12%(약한 변형 3.75/9%, 강한 변형 7.5/18%). 전환 0.15s ease.
- 비활성: 면 #f4f4f5, 글자 #37383c29. 아웃라인은 선을 그대로 두고 글자만 흐리게.

### 입력창
| 크기 | 안 여백 | 글자 | 모서리 | 아이콘 |
|---|---|---|---|---|
| large | 12px 8px (입력 글자 좌우 4px 추가) | 15px / 400 | 14px | 20px |
| medium | 10px 6px (입력 글자 좌우 4px 추가) | 14px / 400 | 12px | 18px |

- 기본: 1px 안쪽 선 #70737c29.
- 포커스: 안쪽 선 #0066ff6e + 바깥 4px 링 #0066ff1f.
- 오류: 안쪽 선 #ff42426e, 포커스 때 #ff424285 선 + 바깥 4px #ff42421f 링.
- 비활성: 면 #70737c0d, 선 #70737c14.
- 테두리 전환 0.2s ease.

### 카드·리스트
- 칩: xsmall 24px(모서리 8px, 11px 글자) · small 32px(10px, 12px) · medium 36px(10px, 13px) · large 40px(12px, 14px). 글자 굵기 500.
- 칩 solid: 면 #70737c0d, 선택되면 면 #0066ff0d + 파란 글자. outlined: 1px #70737c29 선, 선택되면 1px #0066ff47 선.
- 카드 메타 줄: 13px / 500, 요소 사이 6–8px.
- 리스트 카드: 앞뒤 썸네일 공간 36–40px, 요소 사이 12–16px. 제목 15–16px bold.
- 섹션 메시지(안내 박스): 안 여백 12px. 상태별로 앞 아이콘 색만 바꾼다(성공 초록, 주의 주황, 오류 빨강, 정보 파랑).

### 상단 바·탭 바
- 탭: 위아래 여백 small 9px · medium 12px · large 14px, 좌우 12px(꽉 채움 모드는 0). 글자 small 15px, medium·large 17px, 모두 bold(600).
- 선택된 탭 글자 #000000, 아닌 탭 #37383c9c. 선택 표시 막대 높이 2px. 탭 목록 아래 1px 선.
- 하단 탭 바(BottomNavigation): 높이 56px, 위아래 9px. 위쪽 1px 선 #70737c14. 선택 #0066ff, 비선택 #989ba2.
- 상단 바 세부 수치: 확인 필요

### 바텀시트·모달
- 팝업 모달 너비: medium 360px, large 480px, xlarge 560px. 최소 320px. 모서리 24px.
- 모달 안 여백: 상단 바·본문 모두 24px.
- 바텀시트: 위쪽 모서리 32px, 그림자 0 15px 75px #17171729, 자리 잡는 시간 280ms ease.
- 딤: #17171985 (다크 #171719bd).
- 전체 화면 모달은 모서리 0.

### 토스트·스낵바
- 모서리 12px, 안 여백 11px 16px, 요소 사이 16px.
- 바탕: #1b1c1e를 52% 투명도로 깔고, 그 위에 #0066ff 5% 막을 한 겹 더 얹는다. 뒤는 32px 흐림(backdrop blur).
- 너비: 768px 이상에서 356–420px, 그 아래는 꽉 채움.
- 등장·퇴장 0.2s ease.
- 스낵바 버튼 글자 15px bold.

## 7. 아이콘·이미지·모션
- 아이콘: 단순하고 현대적인 형태가 기본. 공식 문서에서 키워드로 검색할 수 있다. 입력창 안 18–20px, 버튼 안 12–16px.
- 일러스트·사진: 확인 필요. 썸네일 컴포넌트에 비율·모서리·테두리 옵션이 있다.
- 모션: 호버·누름 0.15s ease, 입력 테두리 0.2s ease, 토스트 0.2s ease, 바텀시트 280ms ease. 이징 토큰은 따로 없다.
- 누름 효과에 크기 축소(scale 0.95)를 쓰는 변형이 있다.

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 확인 필요. 공개 문서와 저장소에서 UX 라이팅 지침을 찾지 못했다.
- 예시: 확인 필요

## 9. AI에 넣을 때
```
원티드(Montage) 스타일로 디자인해 줘.
- 주색: #0066ff (포커스 선 #0066ff6e, 링 #0066ff1f)
- 글자: 본문 #171719, 보조 #2e2f33e0, 설명 #37383c9c
- 배경: #ffffff, 회색 바탕 #f7f7f8, 회색 면 #70737c14
- 선: #70737c29 (1px inset box-shadow)
- 상태: 성공 #00bf40, 주의 #ff9200, 오류 #ff4242
- 글꼴: Pretendard JP, 본문 16/24, 버튼 14–15px 600
- 모서리: 버튼 12px(large 14px), 모달 24px, 바텀시트 32px
- 간격 단위: 4px, 모바일 좌우 20px, 컬럼 간격 20px
- 버튼: 높이 40/48px, 호버 5%·누름 12% 막
- 분위기: 얇은 선과 옅은 푸른 회색, 파랑은 한 화면에 한 번
```

## 10. 참고 자료
- https://montage.wanted.co.kr (확인 2026-10-31)
- https://github.com/wanteddev/montage-web (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/tree/main/packages/theme/src/theme — atomic(blue, coolNeutral, neutral, green, orange, red, common), semantic, typography, radius, spacing, opacity, breakpoint (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/tree/main/packages/core/src/components — button, text-field, chip, tab, bottom-navigation, modal, toast, snackbar, card, list-card, section-message, with-interaction (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/tree/main/docs/src/features/docs/components/foundations — grid, typography, icons (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/blob/main/packages/core/README.ko.md — Pretendard JP 불러오기 안내 (확인 2026-10-31)

서비스 이름과 브랜드는 (주)원티드랩의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.
