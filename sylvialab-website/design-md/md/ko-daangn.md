# 당근 디자인 시스템

> 근거: 공개 문서 기반 (SEED Design 공식 문서 seed-design.io, 오픈소스 저장소 daangn/seed-design의 토큰 정의 파일)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 동네 기반 중고거래·커뮤니티 앱. 모바일 앱이 중심이고, 판매자 센터·광고주 센터 같은 웹 도구도 같은 시스템을 쓴다.
- 디자인 인상 한 줄: 흰 바탕에 짙은 회색 글자, 주황(#ff6600)은 화면에서 가장 중요한 행동 하나에만 쓴다.
- 공식 시스템 이름: SEED Design (토큰 원본 이름은 Rootage, 저장소 라이선스 Apache-2.0)
- 구조: 원시 팔레트(`$color.palette.*`) 위에 역할 토큰(`$color.fg.*`, `$color.bg.*`, `$color.stroke.*`)을 얹는다. 화면 코드에서는 역할 토큰만 쓴다.
- 라이트·다크 두 테마가 토큰 단위로 정의되어 있다.

## 2. 색상
### 브랜드
팔레트 이름은 `carrot`이다. 다크 테마에서는 단계가 뒤집혀 같은 이름이 다른 값을 가진다.

| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| bg.brand-solid | #ff6600 (carrot-600) | #ff6600 (carrot-700) | 화면의 핵심 버튼 배경 |
| bg.brand-solid-pressed | #e14d00 (carrot-700) | #ff9e65 (carrot-800) | 핵심 버튼 눌림 |
| bg.brand-weak | #fff2ec (carrot-100) | #31241f | 연한 브랜드 배경(배지 등) |
| bg.brand-weak-pressed | #ffe8db (carrot-200) | #4b291c | 연한 배경 눌림 |
| fg.brand | #ff6600 | #ff6600 | 브랜드 색 글자·아이콘 |
| fg.brand-contrast | #e14d00 | #ff6600 | 연한 브랜드 배경 위 글자 |
| stroke.brand-weak | #ffd5c0 (carrot-300) | #6b311c | 브랜드 외곽선(약) |
| stroke.brand-solid | #e14d00 | #ff6600 | 브랜드 외곽선(강) |
| fg.on-brand-solid | #ffffff | #ffffff | 주황 배경 위 글자 |

carrot 팔레트 전체(라이트): 100 #fff2ec · 200 #ffe8db · 300 #ffd5c0 · 400 #ffb999 · 500 #ff9364 · 600 #ff6600 · 700 #e14d00 · 800 #b93901 · 900 #862b00 · 1000 #471601

### 중립(회색 단계)
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| gray-00 | #ffffff | #000000 | 기본 표면 |
| gray-100 | #f7f8f9 | #16171b | 눌린 표면 |
| gray-200 | #f3f4f5 | #1d2025 | 가장 아래 바탕, 비활성 배경 |
| gray-300 | #eeeff1 | #2b2e35 | 약한 배경 눌림 |
| gray-400 | #dcdee3 | #393d46 | 입력창·카드 외곽선 |
| gray-500 | #d1d3d8 | #5b606a | 비활성 글자 |
| gray-600 | #b0b3ba | #868b94 | 플레이스홀더 |
| gray-700 | #868b94 | #b0b3ba | 보조 글자(subtle) |
| gray-800 | #555d6d | #dcdee3 | 보조 글자(muted) |
| gray-900 | #2a3038 | #e9eaec | 어두운 버튼 배경 |
| gray-1000 | #1a1c20 | #f3f4f5 | 본문 글자 |

역할 토큰으로 묶으면 다음과 같다.

| 역할 토큰 | 라이트 HEX | 쓰임 |
|---|---|---|
| fg.neutral | #1a1c20 | 기본 글자 |
| fg.neutral-muted | #555d6d | 설명 글자 |
| fg.neutral-subtle | #868b94 | 부가 정보, 리스트 상세 |
| fg.placeholder | #b0b3ba | 입력 안내 |
| fg.disabled | #d1d3d8 | 비활성 글자 |
| bg.layer-basement | #f3f4f5 | 화면 가장 깊은 바탕 |
| bg.layer-default | #ffffff | 리스트·본문이 놓이는 기본 표면 |
| bg.layer-floating | #ffffff | 시트·다이얼로그 같은 떠 있는 표면 |
| bg.neutral-weak | #f3f4f5 | 회색 버튼, 약한 배지 |
| bg.neutral-solid | #2a3038 | 어두운 버튼, 스낵바 |
| bg.disabled | #f3f4f5 | 비활성 버튼 배경 |
| bg.overlay | #00000074 | 시트·다이얼로그 뒤 딤 |
| stroke.neutral-weak | #dcdee3 | 카드·입력창·아웃라인 버튼 외곽선 |
| stroke.neutral-muted | #00000010 | 섹션 경계선, 아웃라인 버튼 |
| stroke.neutral-subtle | #0000000c | 리스트 항목 사이 구분선 |
| stroke.focus-ring | #5e98fe | 키보드 포커스 링 |

### 상태
| 토큰 | 라이트 HEX | 다크 HEX | 쓰임 |
|---|---|---|---|
| success (fg.positive) | #079171 | #22b27f | 완료, 확인 |
| success 배경 (bg.positive-weak) | #edfaf6 | #202926 | 성공 안내 박스 |
| warning (fg.warning) | #9b7821 | #ca901c | 주의 글자 |
| warning 배경 (bg.warning-solid) | #fbdc65 | #dab156 | 강한 주의 배경, 위 글자는 검정 계열 |
| warning 배경 (bg.warning-weak) | #fff7de | #302819 | 주의 안내 박스 |
| error (fg.critical) | #fa342c | #ff6e60 | 오류 글자, 필수 표시 |
| error 배경 (bg.critical-solid) | #fa342c | #f73526 | 삭제 같은 위험 버튼 |
| error 배경 (bg.critical-weak) | #fdf0f0 | #322323 | 오류 안내 박스 |
| info (fg.informative) | #217cf9 | #41a2f9 | 정보 글자, 링크성 강조 |
| info 배경 (bg.informative-weak) | #eff6ff | #202742 | 정보 안내 박스 |

### 서비스 고유 색
- 매너온도 배지: 10단계(l1~l10)로 배경과 글자 색이 따로 정해져 있다. 낮은 단계는 회색(l1 글자 #757b85, 배경 #f1f2f3), 중간은 주황(l6 글자 #ff6600, 배경 #fff0e5), 가장 높은 단계는 빨강(l10 글자 #cb0123, 배경 #ffebee)이다.
- 배너 배경 10종: blue #e1f7ff, cool-gray #ebf1f5, green #f0fbe5, orange #fff2e1, pink #ffebf1, purple #f5ecff, red #ffecee, teal #e6faf6, warm-gray #f2f0ee, yellow #fffae1.

## 3. 타이포그래피
- 글꼴: iOS·Android·macOS는 각 플랫폼 시스템 글꼴. Windows만 Pretendard(SIL OFL)를 쓴다. 맑은 고딕·Segoe UI가 의도와 맞지 않아서라고 공식 문서가 설명한다.
- 대체 글꼴(웹 CSS 순서): `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- 굵기는 세 가지뿐: regular 400, medium 500, bold 700.
- 크기 토큰은 rem 단위(1rem = 16px)라 OS 글자 크기 설정을 따라간다. 크기 고정이 필요한 곳은 `-static` px 토큰을 쓴다.
- 크기 단계 번호와 행간 단계 번호를 같이 맞춰 쓰는 것이 원칙이다(t5 크기 + t5 행간).

| 단계 | 크기(px) | 굵기 | 행간(px) | 쓰임 |
|---|---|---|---|---|
| t1 | 11 | 400/500/700 | 15 | 작은 배지, 매너온도 |
| t2 | 12 | 400/500/700 | 16 | 큰 배지, 상단 바 부제 |
| t3 | 13 | 400/500/700 | 18 | 리스트 상세, xsmall 버튼 |
| t4 | 14 | 400/500/700 | 19 | 작은·중간 버튼, 칩, 탭(작음) |
| t5 | 16 | 400/500/700 | 22 | 리스트 제목, 입력값, 탭(중간) |
| t6 | 18 | 400/500/700 | 24 | 큰 버튼, 상단 바 제목 |
| t7 | 20 | 400/500/700 | 27 | 소제목 |
| t8 | 22 | 400/500/700 | 30 | 시트·다이얼로그 제목 |
| t9 | 24 | 400/500/700 | 32 | 큰 제목 |
| t10 | 26 | 400/500/700 | 35 | 화면 제목(screenTitle) |
| t11 | 28 | 400/500/700 | 38 | sm(480px) 이상 권장 |
| t12 | 32 | 400/500/700 | 42 | sm 이상 권장 |
| t13 | 40 | 400/500/700 | 52 | sm 이상 권장 |
| t14 | 48 | 400/500/700 | 60 | sm 이상 권장 |

역할 이름이 붙은 스타일 세 가지:

| 이름 | 조합 | 쓰임 |
|---|---|---|
| screenTitle | 26px / 35px / 700 | 화면 상단 큰 제목 |
| articleBody | 16px / 24px / 400 | 게시글 본문 (행간을 한 단계 넓게) |
| articleNote | 14px / 22px / 400 | 주석, 참고 사항 |

## 4. 간격·레이아웃
- 기본 단위: 4px. 토큰 이름 `x1` = 4px, `x0_5` = 2px처럼 4의 배수와 절반 단계를 함께 둔다.
- 간격 단계: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 52, 56, 64 (px)
- 화면 좌우 여백(모바일): `global-gutter` 16px. 리스트 항목, 시트 본문, 탭 스크롤 여백이 모두 이 값을 쓴다.
- 역할 간격 토큰:

| 토큰 | 값 | 쓰임 |
|---|---|---|
| spacing-x.global-gutter | 16px | 화면 좌우 기본 여백 |
| spacing-x.between-chips | 8px | 칩 사이 가로 간격 |
| spacing-y.component-default | 12px | 따로 정해지지 않은 컴포넌트 사이 세로 간격 |
| spacing-y.nav-to-title | 20px | 상단 바와 화면 제목 사이 |
| spacing-y.between-text | 6px | 텍스트 요소 사이 |
| spacing-y.screen-bottom | 56px | 화면 맨 아래 여백 |

- 반응형 중단점(웹, 모바일 우선):

| 구간 | 너비 | 거터 | 마진 |
|---|---|---|---|
| base | 0–479px | 16px | 12px |
| sm | 480–767px | 16px | 12px |
| md | 768–1279px | 32px | 24px |
| lg | 1280–1439px | 32px | 24px |
| xl | 1440px 이상 | 32px | 24px |

- 그리드(웹): 콘텐츠 페이지는 12컬럼, 최대 너비 1040px 권장(넓은 탐색 화면은 1280px까지). 대시보드는 밀도별로 8컬럼·720px(낮음), 12컬럼·1040px(기본), 전체 폭(높음). 대시보드 거터 24px, 마진 32px. 사이드바는 768px 이상에서만 보인다.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius.r0_5 | 2px | 아주 작은 요소 |
| radius.r1 | 4px | 중간 배지 |
| radius.r1_5 | 6px | 큰 배지 |
| radius.r2 | 8px | small·medium 버튼, medium 입력창, 스낵바 |
| radius.r2_5 | 10px | 콜아웃, 눌린 리스트 항목 |
| radius.r3 | 12px | large 버튼, large 입력창 |
| radius.r3_5 | 14px | 확인 필요(문서상 쓰임 미기재) |
| radius.r4 | 16px | 확인 필요(문서상 쓰임 미기재) |
| radius.r5 | 20px | 다이얼로그 |
| radius.r6 | 24px | 바텀시트 위쪽 모서리 |
| radius.full | 9999px | xsmall 버튼, 칩, FAB, 매너온도 배지 |
| shadow.s1 | 0 1px 4px #00000014 | 낮은 띄움 |
| shadow.s2 | 0 2px 10px #0000001a | 중간 띄움 |
| shadow.s3 | 0 4px 16px #0000001f | 가장 위 계층 |
| 테두리 두께 | 1px | 아웃라인 버튼, 입력창, 칩, 배지 |

- 다크 테마의 그림자는 같은 크기에 불투명도만 높인다(s1 #00000080, s2 #000000ad, s3 #000000cc).
- 면 구분은 그림자보다 표면 색 단계(basement → default → floating)로 먼저 한다.

## 6. 주요 컴포넌트
### 버튼 (ActionButton)
| 크기 | 최소 높이 | 좌우 여백 | 글자 | 모서리 |
|---|---|---|---|---|
| xsmall | 32px | 14px | 13px | full |
| small | 36px | 14px | 14px | 8px |
| medium | 40px | 16px | 14px | 8px |
| large | 52px | 20px | 18px | 12px |

- 글자는 모든 크기에서 bold(700).
- 아이콘만 있는 버튼은 높이와 같은 정사각형(32·36·40·52px).
- 종류: brandSolid(주황 배경), neutralSolid(#2a3038 배경, 흰 글자), neutralWeak(#f3f4f5 배경), criticalSolid(빨강), neutralOutline·brandOutline(투명 배경 + 1px 선), ghost(투명).
- 눌림: 배경이 pressed 토큰으로 바뀌고 버튼 자체가 살짝 줄어든다(scale 피드백). 색 전환 150ms.
- 비활성: 배경 #f3f4f5, 글자 #d1d3d8. 종류와 관계없이 같다.
- 로딩: 글자 대신 원형 진행 표시(14–18px, 두께 2px).

### 입력창 (TextInput)
| 형태·크기 | 최소 높이 | 좌우 여백 | 글자 | 모서리 |
|---|---|---|---|---|
| outline large | 52px | 16px | 16px | 12px |
| outline medium | 40px | 14px | 14px | 8px |
| underline large | 40px | 0 | 18px | 없음(아래선 1px) |
| underline medium | 34px | 0 | 16px | 없음(아래선 1px) |
| 여러 줄 large | 94px | 16px | 16px | 12px |
| 여러 줄 medium | 82px | 14px | 14px | 8px |

- 기본 외곽선 #dcdee3 1px, 값 글자 #1a1c20, 안내 글자 #b0b3ba.
- 라벨 묶음(Field): 라벨과 입력창 사이 8px. 필수 표시는 빨강 점.

### 카드·리스트
- 리스트 항목: 위아래 12px, 좌우 16px. 제목 16px/400 #1a1c20, 상세 13px #868b94. 앞 아이콘 22px, 뒤 화살표 18px.
- 누르면 배경이 #00000007 정도로 어두워지고, 좌우 6px 안쪽으로 들어오며 모서리 10px이 생긴다.
- 항목 사이 구분선은 stroke.neutral-subtle, 섹션 경계는 stroke.neutral-muted로 나눠 쓴다.
- 콜아웃(안내 박스): 안 여백 14px, 모서리 10px, 최소 높이 50px, 글자 14px. 상태별로 연한 배경 + 진한 글자 조합.
- 배지: large 높이 24px·모서리 6px·글자 12px, medium 높이 20px·모서리 4px·글자 11px. weak(연한 배경, medium 굵기), solid(진한 배경, bold), outline(1px 선) 세 종류.
- 칩: 높이 32/36/40px, 모서리 full, 글자 14px medium. 칩 사이 8px.

### 상단 바·탭 바
- 상단 바(TopNavigation): 높이 56px, 좌우 6px. 제목만 있을 때 18px bold, 부제가 있으면 제목 16px bold + 부제 12px. iOS·Android 정렬 방식을 따로 둔다. 투명 톤일 때 글자는 흰색.
- 탭: medium 최소 높이 44px·글자 16px bold, small 40px·14px bold. 선택 안 된 탭 글자 #868b94.
- 앱 하단 탭 바: 확인 필요(공개 토큰에 별도 정의 없음).

### 바텀시트·모달
- 바텀시트: 위쪽 모서리 24px, 최대 너비 480px, 최대 높이 화면의 90%. 헤더 위 24px·아래 16px, 제목 22px bold, 설명 16px. 본문·버튼 영역 좌우 16px. 뒤 딤 #00000074. 나타날 때 300ms, 사라질 때 200ms.
- 다이얼로그: 모서리 20px, 화면 너비의 90%(medium 최대 480px, large 800px), 좌우 바깥 여백 20px. 안 여백 24px, 제목 22px bold, 설명 16px #555d6d. 딤 등장·퇴장 100ms.

### 토스트·스낵바
- 스낵바: 배경 #2a3038, 모서리 8px, 최소 높이 44px, 최대 너비 464px, 안 여백 10px. 성공이면 앞 아이콘 초록, 실패면 빨강.
- 나타날 때 80% 크기·투명에서 시작해 150ms 안에 자리 잡는다.

### 기타
- FAB: 44px 원, 흰 떠 있는 표면, 아이콘 22px.
- 스위치: 높이 32·24·16 세 크기.
- 체크박스: medium 최소 높이 32px, large 36px. 라벨과 8px.

## 7. 아이콘·이미지·모션
- 아이콘: 당근 로고 형태에서 온 둥근 인상, 굵은 선. 모노크롬과 멀티컬러 두 분류, 300개 안팎. 이름은 의미가 아니라 생김새로 짓는다. 실제 쓰임 크기는 컴포넌트 토큰 기준 14, 16, 18, 22px이 자주 나온다.
- 일러스트·사진: 공식 문서에 별도 규칙 확인 필요. 이미지 프레임·반응 버튼 컴포넌트가 있다.
- 모션 길이: d1 50ms, d2 100ms, d3 150ms, d4 200ms, d5 250ms, d6 300ms. 200ms 이하는 작은 반응(버튼, 포커스), 넘으면 화면 전환·시트 같은 큰 움직임으로 나눈다.
- 이징:

| 토큰 | cubic-bezier | 쓰임 |
|---|---|---|
| easing | (0.35, 0, 0.35, 1) | 버튼·포커스 같은 기능 반응 |
| enter | (0, 0, 0.15, 1) | 시트·다이얼로그 등장 |
| exit | (0.35, 0, 1, 1) | 시트·다이얼로그 퇴장 |
| enter-expressive | (0.03, 0.4, 0.1, 1) | 강조할 등장 |
| exit-expressive | (0.35, 0, 0.95, 0.55) | 강조할 퇴장 |

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 친근하고 활기찬 해요체. 원칙은 명확함, 쉬움, 배려 세 가지.
- 존댓말 높임(-시-)은 줄인다. "할 수 있어요"처럼 쓰고 "하실 수 있어요"는 피한다. 사용자 이름을 부를 때만 "님"을 붙인다.
- 수는 아라비아 숫자로 쓴다.
- 같은 내용이면 부정문보다 긍정문으로 쓴다.
- 한 문장에 한 가지 내용만 담는다.
- 느낌표는 꼭 필요할 때 한 번만.
- 마침표는 평서문 끝에 찍되, 화면 큰 제목·20pt 이상 큰 글씨·버튼·메뉴·라벨에는 찍지 않는다.
- 예시 구조: "[대상]을 [동작]할 수 있어요", "[닉네임]님, [제안]해보세요"

## 9. AI에 넣을 때
```
당근 스타일로 디자인해 줘.
- 주색: #ff6600 (눌림 #e14d00). 화면당 핵심 버튼 하나에만.
- 글자: 본문 #1a1c20, 설명 #555d6d, 부가 #868b94
- 배경: 표면 #ffffff, 바닥·회색 버튼 #f3f4f5, 외곽선 #dcdee3
- 상태: 오류 #fa342c, 성공 #079171, 정보 #217cf9
- 글꼴: 시스템 글꼴(Windows는 Pretendard), 굵기 400/500/700만
- 크기: 본문 16/22, 리스트 상세 13/18, 화면 제목 26/35 bold
- 모서리: 버튼 8px(large 12px), 다이얼로그 20px, 시트 위 24px, 칩 full
- 간격 단위: 4px, 화면 좌우 16px
- 버튼: 높이 40/52px, 글자 bold, 비활성은 #f3f4f5 배경 + #d1d3d8 글자
- 분위기: 그림자 거의 없이 면 색으로 층을 나누는 담백한 화면, 해요체
```

## 10. 참고 자료
- https://seed-design.io (확인 2026-10-31)
- https://github.com/daangn/seed-design (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/packages/rootage — color.yaml, dimension.yaml, radius.yaml, font-size.yaml, line-height.yaml, font-weight.yaml, shadow.yaml, duration.yaml, timing-function.yaml (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/packages/rootage/components — action-button, text-input, chip, badge, list-item, callout, top-navigation, tab, bottom-sheet, dialog, snackbar, fab, manner-temp-badge, typography (확인 2026-10-31)
- https://github.com/daangn/seed-design/blob/main/packages/css/base.css — 웹 글꼴 순서 (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/docs/content/foundations — typography, layout, motion, iconography, voice-and-tone, writing 문서 (확인 2026-10-31)

서비스 이름과 브랜드는 당근마켓(주)의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.
