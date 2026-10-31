# 토스 디자인 시스템

> 근거: 공개 문서 기반 (앱인토스 개발자 문서 + npm 공개 패키지 @toss/tds-colors 0.1.0, @toss/tds-typography 0.0.3, @toss/tds-mobile 2.5.1)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 송금·결제·자산관리를 한 앱에서 하는 금융 슈퍼앱. 외부 파트너가 토스 안에 넣는 미니앱(앱인토스)도 같은 시스템을 쓴다.
- 디자인 인상 한 줄: 흰 바탕, 푸른 회색 글자, 파랑(#3182f6) 하나. 큰 글자와 넉넉한 둥근 버튼으로 한 화면에 한 가지 일만 시킨다.
- 공식 시스템 이름: TDS (Toss Design System). 미니앱용 React 구현은 TDS Mobile.
- 특징
  - 색 이름이 `adaptive`로 시작한다. 같은 토큰이 라이트·다크에서 다른 값을 낸다.
  - 글자 크기 토큰이 11~30px을 1px 단위로 20단계 촘촘히 나눈다(t1~t7 + st1~st13).
  - 글자 크기가 OS 글자 크기 설정(iOS 접근성 크기, Android fontScale)을 따라 커진다.
  - 버튼 색은 primary·danger·dark·light 네 가지, 채움(fill)과 연한(weak) 두 변형뿐이다.

## 2. 색상
값은 npm `@toss/tds-colors`의 `colors.light.css`, `colors.dark.css`에서 읽었다.

### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| blue500 | #3182f6 | #3485fa | 주요 버튼(primary fill), 강조 |
| blue600 | #2272eb | #449bff | 연한 버튼 글자(라이트) |
| blue400 | #4593fc | #2970d9 | 연한 버튼 글자(다크) |
| blue700 | #1b64da | 확인 필요 | light 버튼 글자 |
| blue50 | #e8f3ff | #202c4d | 연한 파랑 면 |
| disabledBlue500 | #c9e2ff | 확인 필요 | 비활성 파랑 |

파랑 전체 단계(라이트): 50 #e8f3ff · 100 #c9e2ff · 200 #90c2ff · 300 #64a8ff · 400 #4593fc · 500 #3182f6 · 600 #2272eb · 700 #1b64da · 800 #1957c2 · 900 #194aa6

### 중립(회색 단계)
| 토큰 | 라이트 HEX | 다크 HEX | 쓰임 |
|---|---|---|---|
| grey50 | #f9fafb | #202027 | 가장 옅은 면 |
| grey100 | #f2f4f6 | #2c2c35 | 회색 바탕(greyBackground), 구획 면 |
| grey200 | #e5e8eb | #3c3c47 | 얇은 구분선(hairlineBorder) |
| grey300 | #d1d6db | #4d4d59 | 비활성 테두리 |
| grey400 | #b0b8c1 | #62626d | 비활성 글자·아이콘 |
| grey500 | #8b95a1 | #7e7e87 | 흐린 보조 글자 |
| grey600 | #6b7684 | #9e9ea4 | 보조 글자, 설명 문단 |
| grey700 | #4e5968 | #c3c3c6 | 본문 글자, dark 버튼 채움 |
| grey800 | #333d4b | #e4e4e5 | 진한 글자 |
| grey900 | #191f28 | #ffffff | 제목·가장 진한 글자 |
| background | #ffffff | #17171c | 기본 화면 바탕 |
| layeredBackground | #ffffff | #202027 | 한 층 올라간 면 |
| floatBackground | #ffffff | #2c2c35 | 떠 있는 면(시트·팝오버) |
| backgroundLevelB01 | #f2f4f6 | #101013 | 회색 계열 바탕 |
| pcScreenBg | #f6f7f9 | 확인 필요 | PC 화면 바깥 바탕 |
| dimmedBackground | rgba(0,0,0,0.2) | 확인 필요 | 시트·모달 뒤 딤 |

- 회색은 순수 회색이 아니라 푸른 기가 섞여 있다(#191f28, #4e5968). 다크 모드 회색은 반대로 거의 무채색이다.
- 투명 회색 단계도 있다: greyOpacity50 rgba(0,23,51,0.02) ~ greyOpacity900 rgba(2,9,19,0.91). 100은 0.05, 200은 0.1, 500은 0.46.
- 글자 역할별(본문·보조) 공식 매핑 표는 공개 문서에서 찾지 못했다. 위 쓰임 열의 글자 역할은 컴포넌트 코드에서 쓰인 위치로 정리했다.

### 상태
| 토큰 | HEX(라이트) | 다크 | 쓰임 |
|---|---|---|---|
| success (green500) | #03b26c | #16bb76 | 완료, 수익 |
| warning (orange500) | #fe9800 | #f18600 | 주의 |
| error (red500) | #f04452 | #f04251 | 오류, danger 버튼 |
| info (blue500) | #3182f6 | #3485fa | 안내 |

그 밖의 색 단계(500 기준): yellow #ffc342, teal #18a5a5, purple #a234c7. 모두 50~900 10단계다.
- red: 50 #ffeeee · 100 #ffd4d6 · 300 #fb8890 · 500 #f04452 · 600 #e42939 · 700 #d22030
- green: 50 #f0faf6 · 100 #aeefd5 · 300 #3fd599 · 500 #03b26c · 700 #029359
- orange: 50 #fff3e0 · 300 #ffbd51 · 500 #fe9800 · 700 #f57800
- yellow: 50 #fff9e7 · 300 #ffdd78 · 500 #ffc342 · 700 #faa131

## 3. 타이포그래피
- 글꼴: Toss Product Sans (토스 전용 글꼴, 외부 배포용 라이선스 확인 필요). 이모지는 Tossface.
- 대체 글꼴: 'SF Pro KR', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', sans-serif
- 굵기: regular 400, medium 500, semibold 600, bold 700.
- 행간: 작은 글자는 1.5배, 큰 글자로 갈수록 좁아져 30px에서 약 1.33배.
- 아래는 OS 기본 글자 크기(iOS Large) 기준이다. 사용자가 글자를 키우면 단계별로 커진다.

| 단계 | 크기(px) | 굵기 | 행간(px) | 쓰임 |
|---|---|---|---|---|
| t1 | 30 | 확인 필요 | 40 | 가장 큰 제목·숫자, large 배지 기준 |
| st1 | 29 | - | 38 | 보조 단계 |
| st2 | 28 | - | 37 | 보조 단계 |
| st3 | 27 | - | 36 | 보조 단계 |
| t2 | 26 | 확인 필요 | 35 | 큰 제목 |
| st4 | 25 | - | 34 | 보조 단계 |
| st5 | 24 | - | 33 | 보조 단계 |
| st6 | 23 | - | 32 | 보조 단계 |
| t3 | 22 | 확인 필요 | 31 | 화면 제목급 |
| st7 | 21 | - | 30 | 보조 단계 |
| t4 | 20 | 700 | 29 | 큰 목록 머리말(ListHeader large) |
| st8 | 19 | - | 28 | 보조 단계 |
| st9 | 18 | - | 27 | 보조 단계 |
| t5 | 17 | 400·700 | 25.5 | 기본 본문, large·xlarge 버튼, ListHeader medium |
| st10 | 16 | 400 | 24 | 본문(Text 기본값), 말풍선 |
| t6 | 15 | 500·600 | 22.5 | medium 버튼, 보조 본문 |
| st11 | 14 | 500 | 21 | 작은 설명 |
| t7 | 13 | 400·500·600 | 19.5 | small 버튼, 캡션 |
| st12 | 12 | 600 | 18 | 아주 작은 라벨 |
| st13 | 11 | 500 | 16.5 | 최소 크기 설명 |

- 이름 규칙: t(title)는 큰 단계, st(sub title)는 그 사이를 메우는 단계다.
- 글자 크기는 고정 px이 아니라 접근성 설정 표를 거친다. 예: iOS xxxLarge 설정에서 t1은 42px까지 커진다.

## 4. 간격·레이아웃
- 기본 단위: 확인 필요 (공개 문서와 패키지에서 간격 토큰 표를 찾지 못했다. `Spacing` 컴포넌트만 있다.)
- 간격 단계: 확인 필요
- 컴포넌트 안에서 실제로 쓰는 여백: 4, 8, 10, 12, 16, 20, 28px (버튼·말풍선 코드 값)
- 화면 좌우 여백(모바일/데스크톱): 확인 필요
- 미니앱 논리 해상도: 세로 약 360×640 ~ 420×740, 가로 약 640×360 ~ 740×420 중 하나를 고른다.
- 노치·다이내믹 아일랜드·하단 홈 바는 Safe Area로 피한다. 레터박스(빈 띠)를 남기지 않는다.
- 에셋은 1x·2x면 충분하고, 세밀한 그래픽만 3x.
- 테스트는 비율이 다른 기기 3~5대로 한다.
- 그리드: 확인 필요

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| 버튼 small | 8px | 높이 32px 버튼 |
| 버튼 medium | 10px | 높이 38px 버튼 |
| 버튼 large | 14px | 높이 48px 버튼 |
| 버튼 xlarge | 16px | 높이 56px 버튼 |
| 버튼 full | 0px | 화면 가로 전체 버튼 |
| 말풍선(Bubble) small·medium·large | 12px · 16px · 18px | 말풍선 |
| 배지 | 9~13px | 크기별, 6절 참고 |
| hairlineBorder | 1px #e5e8eb (다크 #3c3c47) | 목록 구분선 |
| 그림자 | 확인 필요 | 다크 모드는 그림자 대신 면 밝기(background → layered → float)로 층을 나눈다 |

- 모서리는 컴포넌트 크기에 따라 따로 정해져 있고, 공통 radius 토큰 표는 공개되지 않았다.

## 6. 주요 컴포넌트
TDS Mobile이 내보내는 주요 컴포넌트: Button, TextButton, IconButton, BottomCTA·FixedBottomCTA, ListRow, ListHeader, ListFooter, Top, TopNavigation, Tab, SegmentedControl, Chip, Badge, TextField, SearchField, BottomSheet, AlertDialog, ConfirmDialog, Toast, Tooltip, Switch, Checkbox, Skeleton, ProgressBar, NumberKeypad 등.

### 버튼
| 크기 | 최소 높이 | 최소 폭 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|---|
| small | 32px | 52px | 10px | 8px | t7 13px |
| medium | 38px | 64px | 16px | 10px | t6 15px |
| large | 48px | 80px | 16px | 14px | t5 17px |
| xlarge(기본) | 56px | 96px | 28px | 16px | t5 17px |

| 색 | fill(채움) | weak(연한) |
|---|---|---|
| primary(기본) | 바탕 #3182f6, 흰 글자 | 바탕 #64a8ff 15% 투명, 글자 #2272eb |
| danger | 바탕 #f04452, 흰 글자 | 바탕 #fb8890 15% 투명, 글자 #e42939 |
| dark | 바탕 #4e5968, 흰 글자 | 바탕 greyOpacity100, 글자 #4e5968 |
| light | 흰 바탕, 글자 #1b64da | 흰색 투명 바탕, 흰 글자 |

- 다크 모드 weak는 600 단계 22% 투명 바탕에 400 단계 글자.
- 놓는 방식: inline(옆에 나란히), block(컨테이너 폭), full(가로 전체, 모서리 0).
- 로딩: 점 세 개가 차례로 움직이고 버튼 폭은 그대로 둔다. 화면 낭독기에는 바쁨 상태를 알린다.
- 비활성: 누를 수 없고 흐리게 보인다. 로딩과 비활성을 함께 쓸 수 있다.
- 파트너 브랜드 색을 primary로 넣으면 버튼 색이 그 색으로 바뀐다.

### 입력창
- TextField, SplitTextField, SearchField, TextArea가 있다. 높이·모서리 수치: 확인 필요.

### 카드·리스트
- ListRow: 왼쪽(아이콘·이미지) · 가운데(제목·설명) · 오른쪽(값·화살표) 세 칸 구조. 세부 여백 수치는 확인 필요.
- ListHeader 제목: large 20px 굵게, medium 17px 굵게, small 15px 중간 굵기, xsmall 13px 보통.
- ListHeader 설명: large 13px, medium 12px.
- 구분선은 1px hairline(#e5e8eb).

### 상단 바·탭 바
- Top: 화면 위쪽 큰 제목 영역. TopNavigation: 뒤로 가기·아이콘·텍스트 버튼을 담는 내비게이션 바.
- 미니앱 탭 바는 선택 사항이다. 쓰면 토스가 주는 떠 있는(floating) 형태만 쓰고, 탭은 2~5개.
- Tab, SegmentedControl은 화면 안 전환용.

### 바텀시트·모달
- BottomSheet, AlertDialog, ConfirmDialog. 뒤 딤은 검정 20%.
- 대화상자 왼쪽 버튼은 "취소" 대신 "닫기"로 쓴다. 지금 하던 일을 취소한다는 오해를 막기 위해서다.
- 진입하자마자 홍보·알림 바텀시트를 띄우지 않는다(다크 패턴으로 본다).
- 시트 모서리 수치: 확인 필요.

### 토스트·스낵바
- Toast, PointToast 컴포넌트가 있다. 크기·위치 수치: 확인 필요.

### 배지
| 크기 | 글자 | 굵기 | 여백(상하×좌우) | 모서리 |
|---|---|---|---|---|
| xsmall | 10px | 600 | 3×7px | 9px |
| small | 12px | 700 | 3×7px | 11px |
| medium | 13px | 700 | 3×7px | 12px |
| large | 14px | 700 | 4×8px | 13px |

- 색: blue, green, yellow, orange, red, grey. fill과 weak 변형.

## 7. 아이콘·이미지·모션
- 아이콘·이모지 크기: 24~40px. 한 번에 하나만 쓰고 두 개 이상 묶지 않는다.
- 이모지 글꼴은 Tossface.
- 그래픽은 뜻을 돕는 용도로만 쓴다. 한 화면에 핵심 그래픽 하나. 입자·과한 그라데이션·효과는 피한다.
- 그래픽 색은 라이트·다크 둘 다에서 보이는 중간 밝기로 고른다.
- 앱 로고: 600×600px 정사각형, 모서리 없이 제출(라운드는 플랫폼이 처리).
- 모션: 기본 이징 cubic-bezier(.25,.1,.25,1), 기본 길이 0.5초. 그 밖에 ease(.6,0,0,.6), expo(.16,1,.3,1), back(.34,1.56,.64,1) 곡선과 스프링 프리셋이 있다.
- 3D·모션 리소스는 토스가 주는 모듈 것만 쓴다(미니앱 규칙).

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 모든 상황에서 해요체.
- 능동문을 쓴다. 수동문은 서비스 종료·만료 안내나 안심시키는 말처럼 꼭 필요할 때만.
- 부정형 대신 할 수 있는 것을 말한다. 안 되는 이유가 있으면 이유를 함께 쓴다.
- 과한 높임을 줄인다. "~시겠어요?", "~께" 대신 "~에게".
- 명사를 겹쳐 쓰지 않는다. 한자어 명사는 동사로 풀어 쓴다.
- "되어요" 대신 "돼요".
- 버튼 문구는 다음 행동을 바로 말한다. 혜택만 반복하거나 버튼 위에 부풀린 설명을 붙이지 않는다.
- 예시 구조: [무엇이] [어떻게 됐어요] / 버튼은 [동사 + 기] 또는 [동사 + 요] 형태의 짧은 행동.

## 9. AI에 넣을 때
```
토스(TDS) 스타일로 모바일 화면을 디자인해 줘.
- 주색: #3182f6 (다크 #3485fa), 오류 #f04452, 성공 #03b26c
- 배경: #ffffff, 회색 구획 #f2f4f6, 다크 바탕 #17171c
- 글자: 제목 #191f28, 본문 #4e5968, 보조 #6b7684, 흐린 글자 #8b95a1
- 글꼴: Toss Product Sans 대신 시스템 산스(SF Pro, Apple SD Gothic Neo, Noto Sans KR)
- 크기: 제목 22~26px 굵게, 본문 17px, 보조 15px, 캡션 13px
- 모서리: 하단 큰 버튼 16px, 중간 버튼 10px, 작은 버튼 8px
- 버튼: 높이 56px 가로 꽉 찬 파랑 버튼 하나, 보조는 연한 파랑(weak)
- 구분: 그림자 대신 #f2f4f6 면과 1px #e5e8eb 선
- 문구: 해요체, 짧게, 한 화면에 한 가지 일
```

## 10. 참고 자료
- https://developers-apps-in-toss.toss.im/design/components (TDS 소개·컴포넌트 목록, 확인 2026-10-31)
- https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md (미니앱 UI/UX·UX 라이팅 규칙, 확인 2026-10-31)
- https://developers-apps-in-toss.toss.im/llms.txt (문서 색인, 확인 2026-10-31)
- https://tossmini-docs.toss.im/tds-mobile/components/button/ (Button 속성, 확인 2026-10-31)
- https://www.npmjs.com/package/@toss/tds-colors (0.1.0, colors.light.css·colors.dark.css, 확인 2026-10-31)
- https://www.npmjs.com/package/@toss/tds-typography (0.0.3, 글자 크기·행간 표, 확인 2026-10-31)
- https://www.npmjs.com/package/@toss/tds-mobile (2.5.1, 버튼·배지·목록 머리말·모션 값, 확인 2026-10-31)

### 근거와 한계
- 색은 tds-colors 패키지 CSS에서, 글자 크기·행간은 tds-typography와 tds-mobile 패키지 코드에서, 버튼·배지·말풍선 수치는 tds-mobile 배포 코드에서 읽었다.
- UX 라이팅·그래픽·해상도 규칙은 앱인토스 개발자 문서에서 읽고 내 말로 바꿔 적었다.
- tossmini-docs의 대부분 페이지는 수집 차단으로 열지 못했다. 그래서 간격 단위, 화면 여백, 입력창·시트·토스트 수치, 그림자는 확인하지 못했다.
- 이 값은 미니앱용 TDS Mobile 기준이다. 토스 앱 내부 화면이 같은 값을 쓰는지는 확인 필요.
- TDS UI Kit는 토스의 라이선스가 걸려 있다. 이 문서는 사실 값만 옮겼다.
- 서비스 이름과 브랜드는 각 권리자의 것이며, 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.
