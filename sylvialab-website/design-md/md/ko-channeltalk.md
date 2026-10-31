# 채널톡 디자인 시스템

> 근거: 공개 문서 기반 (오픈소스 저장소 channel-io/bezier-react의 토큰·컴포넌트 코드, @channel.io/bezier-react 3.6.6 / bezier-tokens 0.6.0)
> 작성: SylviaLab · 최종 수정 2026-10-31

## 1. 개요
- 서비스 성격: 기업용 고객 상담·CRM 도구. 상담원이 하루 종일 켜 두는 데스크톱 웹 앱이 중심이고, 고객 쪽에는 웹사이트에 붙는 채팅 위젯이 있다.
- 디자인 인상 한 줄: 흰 면과 반투명 검정 회색 위에 보라빛 파랑(#6157ea) 하나로 행동을 표시하는, 촘촘하고 작은 업무용 화면.
- 공식 시스템 이름: Bezier (저장소 라이선스 Apache-2.0)
- 토큰 세대: 코드에 `global/semantic`(이전), `beta`, `alpha` 세 세트가 있다. 현재 컴포넌트 스타일은 `beta` 토큰(`--color-fill-*`, `--color-text-*`)을 쓴다. 이 문서는 beta 기준으로 적는다.
- 특징
  - 회색 글자와 면을 고정 HEX가 아니라 검정의 투명도로 만든다(본문 #000000d9, 보조 #00000099). 배경이 바뀌어도 대비가 같은 비율로 유지된다.
  - 색 이름 11가지(blue, cobalt, teal, green, olive, yellow, orange, red, pink, purple, navy)를 태그·배지·차트에 고루 쓴다. 상담 태그를 색으로 구분하는 제품 성격과 맞다.
  - 호버 색은 따로 지정하지 않고 빌드 단계에서 원래 색으로부터 자동 계산한다(`-hovered` 접미사).

## 2. 색상
### 브랜드
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| fill.accent.blue.heavier (= fill.action) | #6157ea | #8082ff | 주요 버튼, 탭 선택 표시줄 |
| text.accent.blue (= text.action) | #6157ea | #8082ff | 선택된 탭·리스트 글자, 링크 |
| fill.accent.blue.heavy | #6157ea33 | #6b6eff4d | 선택된 리스트 항목 눌림, 파란 태그 |
| fill.accent.blue | #6157ea1a | #6b6eff2e | 선택 항목 배경, 보조 버튼 배경 |
| state.action.light | #6157ea4d | #6b6eff73 | 포커스 링(3px) |
| text.absolute.white | #ffffff | #ffffff | 진한 버튼 위 글자 |

### 중립(회색 단계)
글자와 면 대부분은 검정(다크에선 흰색)의 투명도다.

| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| text.neutral.heaviest | #000000 | #ffffff | 모달 제목 등 가장 진한 글자 |
| text.neutral (normal) | #000000d9 | #ffffffcc | 본문 |
| text.neutral.light | #00000099 | #ffffff99 | 보조 글자, 플레이스홀더 |
| text.neutral.lighter | #00000066 | #ffffff66 | 비활성 탭, 흐린 아이콘 |
| fill.neutral.heaviest | #000000d9 | #ffffff | 검정 버튼 |
| fill.neutral.heavier | #00000066 | #ffffff66 | 회색 배지 |
| fill.neutral.heavy | #00000026 | #ffffff33 | 꺼진 스위치 |
| fill.neutral (normal) | #00000014 | #ffffff1f | 약한 면 |
| fill.neutral.light | #0000000d | #ffffff14 | 보조 버튼, 입력창 호버, 탭 아래선 |
| fill.neutral.lighter | #00000008 | #ffffff0d | 아주 약한 면 |
| fill.grey (normal) | #fbfbfb | #242426 | 입력창 배경 |
| fill.grey.heavy | #f7f7f8 | #29292d | 토스트·떠 있는 배너 배경 |
| fill.grey.heavier | #efeff0 | #313135 | 진한 회색 면 |
| surface (normal) | #ffffff | #1d1d20 | 기본 표면 |
| surface.low | #fbfbfb | #1a1a1c | 바탕보다 한 단계 낮은 면 |
| surface.high / higher / highest | #ffffff | #242426 / #29292d / #313135 | 툴팁 / 모달 / 가장 위 레이어 |
| surface.glass (normal) | #ffffffe6 | #29292de6 | 반투명 유리 면 |
| border.neutral (normal) | #00000014 | #ffffff1f | 기본 테두리 |
| border.neutral.heavy | #00000026 | #ffffff33 | 진한 테두리 |
| dim.absolute.black | #00000066 | #00000066 | 모달 뒤 딤 |

다크 테마는 표면이 위로 올라갈수록 밝아진다(#1a1a1c → #313135).

### 상태
| 토큰 | 라이트 | 다크 | 쓰임 |
|---|---|---|---|
| success (fill/text.success) | #20ab55 | #51c371 | 완료, 켜진 스위치(green heavier) |
| warning (fill/text.warning) | #e67f2b | #f79847 | 주의. 입력 오류 테두리도 이 주황을 쓴다 |
| error (fill/text.critical) | #e1535d | #f36868 | 삭제, 위험 |
| info (fill/text.highlight) | #3292e3 | #5cadef | 정보 강조(cobalt) |

- 입력창 오류 표시는 빨강이 아니라 주황(state.warning)이다. 바깥 3px 연한 주황 + 안쪽 1px 주황.
- 각 상태 색은 normal(불투명), light(20% 내외), lighter(10% 내외) 세 단계 면을 함께 둔다.

### 보조 색(태그·배지·차트)
| 이름 | text/icon 라이트 | 연한 면(normal) | 진한 면(heavier) |
|---|---|---|---|
| blue | #6157ea | #6157ea1a | #6157ea |
| cobalt | #3292e3 | #3292e31a | #3292e3 |
| teal | #09b2ac | #09b2ac1a | #09b2ac |
| green | #20ab55 | #20ab551a | #20ab55 |
| olive | #b7c427 (아이콘 #a9b110) | #a9b1101a | #a9b110 |
| yellow | #edae0d | #edae0d1a | #edae0d |
| orange | #e67f2b | #e67f2b1a | #e67f2b |
| red | #e1535d | #e1535d1a | #e1535d |
| pink | #d64bb5 | #d64bb51a | #d64bb5 |
| purple | #8e57e7 | #8e57e71a | #8e57e7 |
| navy | #424fab | #424fab1a | #424fab |

차트 기본 10색: #7c72fd, #81dfdd, #fc9783, #b1596a, #fe71ba, #c971ec, #4a75e3, #80b6fd, #fb90f1, #b4d6e5

## 3. 타이포그래피
- 글꼴: Inter(라틴) + Noto Sans KR(한글). Inter는 채널 자체 CDN 또는 Google Fonts에서 불러오도록 README가 안내한다. 둘 다 SIL OFL.
- 대체 글꼴(한국어): `Inter, NotoSansKR, "Noto Sans KR", NotoSansJP, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, system-ui, sans-serif`. 일본어 화면은 JP를 KR 앞에 둔다.
- 코드: `ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace`
- 굵기 토큰은 400·500·600·700이 있으나, 역할 토큰에는 regular 400과 bold 700만 연결되어 있다.
- 자간: 15–17px은 -0.1px(tight), 22px 이상 제목은 -0.4px(tighter)까지 좁힌다.
- 기본 UI 글자는 14px이다. 상담 도구라 작은 글씨가 많다.

| 단계 | 크기(px) | 굵기 | 행간(px) | 쓰임 |
|---|---|---|---|---|
| display large | 36 | 700 | 44 | 큰 숫자, 랜딩 제목 |
| display medium | 30 | 700 | 36 | 큰 제목 |
| heading xlarge | 24 | 700 | 32 | 페이지 제목 |
| heading large | 22 | 700 | 28 | 섹션 제목 |
| heading medium | 18 | 700 | 24 | 카드 제목 |
| heading small | 17 | 700 | 24 | 소제목 |
| heading xsmall | 16 | 700 | 24 | 소제목 |
| heading 2xsmall | 15 | 700 | 20 | 작은 제목 |
| text 2xlarge | 17 | 400/700 | 24 | 큰 본문 |
| text xlarge | 16 | 400/700 | 24 | l 입력창 |
| text large | 15 | 400/700 | 20 | 본문(넓은 영역) |
| text medium | 14 | 400/700 | 18 | 기본 본문, 입력창, 버튼 |
| text small | 13 | 400/700 | 18 | 보조 설명 |
| text xsmall | 12 | 400/700 | 16 | 캡션, 작은 버튼 |
| text 2xsmall | 11 | 400/700 | 16 | 아주 작은 라벨 |
| code medium / small | 14 / 13 | 400 | 18 | 코드 |

## 4. 간격·레이아웃
- 기본 단위: 2px 단위가 섞인 4px 계열. 토큰 이름이 곧 px 값이다(dimension.6 = 6px).
- 간격 단계(자주 쓰는 값): 2, 3, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48
- 컴포넌트 안 여백은 6, 12, 16, 24px이 반복된다(리스트 좌우 6px, 배너 12px, 토스트 16px, 모달 24px).
- 화면 좌우 여백(모바일/데스크톱): 확인 필요(컴포넌트 코드에 페이지 여백 정의 없음)
- 그리드: 확인 필요
- 큰 치수 토큰: 200, 240, 320, 420, 540, 640, 720, 800, 900px. 패널·모달 너비 후보로 쓰인다.

## 5. 모서리·그림자·테두리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-4 | 4px | 작은 태그·배지 |
| radius-6 | 6px | xs 버튼, 큰 태그, 작은 리스트 항목 |
| radius-8 | 8px | s·m 버튼, 입력창, 툴팁, 탭 버튼 |
| radius-12 | 12px | l 버튼, xl 입력창, 토스트, 배너, 스위치 |
| radius-16 | 16px | xl 버튼 |
| radius-20 | 20px | 모달 |
| radius-32 | 32px | 큰 둥근 면 |
| 9999px | 원 | floating 버튼 |
| 기타 토큰 | 2, 3, 7, 10, 14px | 세부 조정용 |

그림자(elevation)는 세 겹이다. 아래쪽 그림자 하나 + 주변 1px 테두리 그림자(#0000000d, 블러 2px) + 안쪽 흰 하이라이트(#ffffff1f, 블러 2px).

| 단계 | 아래 그림자 | 쓰임 |
|---|---|---|
| elevation-1 | 0 1px 2px #00000014 | 살짝 뜬 요소 |
| elevation-2 | 0 2px 6px #00000014 | 스위치 손잡이, 떠 있는 배너 |
| elevation-3 | 0 4px 12px #00000014 | 토스트, 툴팁 |
| elevation-4 | 0 4px 24px #00000014 | 모달 |
| elevation-5 | 0 6px 40px #00000014 | 큰 팝오버 |
| elevation-6 | 0 12px 60px #00000014 | 가장 위 레이어 |

- 테두리는 `border`가 아닌 1px box-shadow로 그린다(border.default, border.top 등). 레이아웃 크기가 변하지 않는다.
- 비활성 요소는 투명도 40%로 낮춘다(opacity.disabled).
- 배경 흐림(backdrop blur): small 6px, large 60px.

## 6. 주요 컴포넌트
### 버튼
| 크기 | 높이 | 최소 너비 | 좌우 여백 | 모서리 |
|---|---|---|---|---|
| xs | 20px | 20px | 2px | 6px |
| s | 24px | 24px | 4px | 8px |
| m | 36px | 36px | 10px | 8px |
| l | 44px | 44px | 12px | 12px |
| xl | 54px | 54px | 20px | 16px |

- 스타일 4종: primary(진한 색 면 + 흰 글자), secondary(10% 연한 색 면 + 색 글자), tertiary(배경 없음, 호버 때만 면), floating(완전한 원 + 그림자, 흰 면 #fdfdff 또는 색 면).
- 색: blue, red, green, cobalt, orange, pink, purple과 monochrome 3종.
- 아이콘과 글자 사이 2px. 글자 자체 좌우 4px(xs·s는 3px).
- 호버: 자동 계산된 `-hovered` 색으로 바뀐다. 전환 150ms.
- 포커스: 파란 primary 버튼에 3px 반투명 파랑 외곽선(#6157ea4d).
- 비활성: 투명도 40%.

### 입력창
| 크기 | 높이 | 글자 | 모서리 |
|---|---|---|---|
| xs | 28px | 14px | 8px |
| m | 36px | 14px | 8px |
| l | 44px | 16px | 8px |
| xl | 54px | 18px | 12px |

- 배경 #fbfbfb, 좌우 여백 12px. 테두리 대신 1px 안쪽 그림자(#00000026)와 아래 1px 2px 그림자.
- 호버·포커스: 안쪽 선이 #6157ea로 바뀌고, 포커스 때 바깥 3px #6157ea4d 링이 붙는다.
- 오류: 안쪽 선 #e67f2b + 바깥 3px #e67f2b4d.
- 플레이스홀더 #00000099. 앞뒤 아이콘 20px.
- secondary 변형은 배경이 #0000000d.

### 카드·리스트
- 리스트 항목(ListItem): 크기별 안 여백 4×6 / 6 / 8×6 / 10×6px, 모서리 6 / 6 / 8 / 12px.
- 호버 배경 #0000000d. 선택되면 배경 #6157ea1a + 글자 #6157ea, 선택 상태에서 누르면 #6157ea33.
- 위험 항목은 빨강 글자, 성공은 초록 글자를 쓴다.
- 배너: 안 여백 12px, 모서리 12px, 최소 너비 200px, 요소 사이 6px. 색별로 10% 연한 면 + 같은 색 글자.
- 태그·배지: 작은 것 좌우 2px·모서리 4px, 큰 것 좌우 4px·모서리 6px. 배경은 각 색의 20% 면.

### 상단 바·탭 바
- 탭 목록 높이: 53 / 45 / 33px(크기 l / m / s). 아래에 1px 회색 선(#0000000d).
- 탭 버튼: 높이 44 / 36 / 24px, 모서리 12 / 8 / 8px. 호버 때 회색 면.
- 선택 표시: 3px 높이의 파란 막대(#6157ea), 양 끝 둥글게(1.5px). 선택된 탭 글자 #6157ea, 아닌 탭 #00000066.
- 상단 바(GNB) 반투명 배경은 이전 토큰에 #efeff0cc가 있으나 beta 기준 값은 확인 필요.

### 바텀시트·모달
- 모달: 모서리 20px, 최소 너비 360px, 안 여백 24px, 머리와 본문 사이 12px, 버튼 영역 위 16px. 표면 #ffffff(surface.higher), 그림자 elevation-4.
- 딤: #00000066. 등장 애니메이션 300ms.
- 닫기 버튼은 모서리에서 18px 안쪽.
- 바텀시트: 확인 필요(웹 컴포넌트에 없음).

### 토스트·스낵바
- 토스트: 너비 288px, 안 여백 16px, 모서리 12px, 배경 #f7f7f8, 그림자 elevation-3. 토스트 사이 6px.
- 앞 아이콘 색으로 성격을 표시: 성공 초록, 주의 주황, 오류 빨강, 기본 회색.
- 좌우에서 밀려 들어오고 나간다(300ms).

### 기타
- 스위치: 30×20px(m), 36×24px(l). 꺼짐 #00000026, 켜짐 초록 #20ab55. 손잡이 흰색, 안쪽 여백 3px, elevation-2.
- 툴팁: 최대 너비 260px, 안 여백 5×8px, 모서리 8px, 표면 #ffffff, elevation-3.

## 7. 아이콘·이미지·모션
- 아이콘: 별도 패키지 `@channel.io/bezier-icons`. 버튼·입력창 안에서 20px, 작은 버튼에서 더 작게 쓴다. 색은 icon.neutral(#00000066)이 기본.
- 일러스트·사진: 확인 필요
- 아바타: 둥근 사각형(smooth corner) 처리 컴포넌트가 따로 있다. 세부 수치 확인 필요.
- 모션: 이징 하나만 쓴다. cubic-bezier(0.3, 0, 0, 1).

| 토큰 | 길이 | 쓰임 |
|---|---|---|
| transition.fast | 150ms | 호버 색, 스위치, 탭 표시줄 |
| transition.default | 300ms | 모달·토스트 등장 |
| transition.slow | 450ms | 큰 전환 |

## 8. 글쓰기 톤(UX 라이팅)
- 말투: 확인 필요. 공개 저장소에는 UX 라이팅 지침이 없다.
- 예시: 확인 필요

## 9. AI에 넣을 때
```
채널톡(Bezier) 스타일로 디자인해 줘.
- 주색: #6157ea (연한 면 #6157ea1a, 포커스 링 #6157ea4d)
- 글자: 본문 #000000d9, 보조 #00000099, 흐림 #00000066
- 배경: 표면 #ffffff, 입력창 #fbfbfb, 토스트 #f7f7f8, 회색 면 #0000000d
- 상태: 성공 #20ab55, 주의·입력오류 #e67f2b, 위험 #e1535d, 정보 #3292e3
- 글꼴: Inter + Noto Sans KR, 기본 14px/18px, 제목 700
- 모서리: 버튼·입력 8px, 큰 버튼·토스트 12px, 모달 20px
- 간격 단위: 2·4px, 자주 쓰는 여백 6/12/16/24px
- 버튼: 높이 36(m)·44(l), 비활성은 투명도 40%
- 테두리: 1px box-shadow로, 그림자는 얕고 넓게
- 분위기: 촘촘한 업무용 화면, 색은 태그 구분에만 넉넉히
```

## 10. 참고 자료
- https://github.com/channel-io/bezier-react (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/tree/main/packages/bezier-tokens/src/beta — global(color, dimension, typography, motion), semantic(light·dark color, radius, typography, elevation, state, border, opacity, backdrop, motion) (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/tree/main/packages/bezier-tokens/src/global — 이전 세대 토큰(font, radius, transition) (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/blob/main/packages/bezier-tokens/scripts/lib/format.ts — 호버 색 자동 생성 (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/tree/main/packages/bezier-react/src/components — Button, TextField, ListItem, Banner, BaseTagBadge, Tabs, Modal, Toast, Switch, Tooltip 스타일 (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/blob/main/packages/bezier-react/README.md — 글꼴 설치 안내 (확인 2026-10-31)

서비스 이름과 브랜드는 (주)채널코퍼레이션의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.
