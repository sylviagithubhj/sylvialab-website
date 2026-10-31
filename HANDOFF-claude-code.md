# SylviaLab 사이트 → sylvialab.kr 배포 인계

이 브랜치(`site-dark-2026`)의 `sylvialab-website/` 폴더가 새 사이트 전체예요.
sylvialab.kr은 GitHub Pages로 `sylviagithubhj/sylvia-site` 저장소에서 나가고 있어요.

## Claude Code에게 할 일

1. `sylviagithubhj/sylvialab-website` 저장소의 `site-dark-2026` 브랜치를 받는다.
2. `sylviagithubhj/sylvia-site` 저장소를 받는다.
3. `sylvialab-website/sylvialab-website/` 안의 파일을 `sylvia-site` 루트로 복사한다.
   - `CNAME` 파일은 그대로 둔다(지우거나 덮어쓰지 않기). 이 파일이 없으면 sylvialab.kr 연결이 끊긴다.
   - `sylvia-site`에만 있고 새 사이트에 없는 파일은 지우기 전에 목록을 보여주고 물어본다.
4. 로컬에서 `python3 -m http.server`로 열어 아래를 확인한다.
   - 한국어 `/`와 영어 `/en/` 홈, 부트캠프 목록, AI 프로덕트 디자인 심화 상세, 문의 페이지
   - 폰 너비(390px)에서 가로 스크롤 없음, 깨진 링크·이미지 없음
5. 커밋하고 `sylvia-site`의 기본 브랜치에 푸시한다. 몇 분 뒤 https://sylvialab.kr 에서 확인한다.

## 이번 버전에 들어간 것

- 다크 톤 리디자인, 한국어(루트)·영어(`/en/`) 두 언어
- 홈: 첫 화면 + 로고 띠 + "무엇을 배우고 싶으세요?" 탭 상품 섹션 하나로 정리
- 부트캠프 4개: AI 프로덕트 전략(3주), AI 프로덕트 디자인 심화(4주), AI 디자인 시스템(4주), AI 디자인 엔지니어링(4주)
- AI 프로덕트 디자인 심화 상세 페이지: 실제 4주 커리큘럼
- 페이지별 하단 CTA 바, 입력칸 A안(채운 박스), 모션 토큰 A(차분하게)
- 이름 표기 Sylvia, 멘토링 3,000명+ (홈 첫 화면에서 파란 굵은 글씨로 강조)
- 문의 폼은 이메일 앱을 여는 방식(heejuk@mail.hongik.ac.kr)
- 한국어 서체 전부 Pretendard (`assets/fonts/PretendardVariable.woff2`)
- "1:1 자문" → "커리어 전략 컨설팅" 이름 통일, 헤드라인 "국내에서 이어갈 커리어, 해외에서 넓혀갈 기회"
- 컨설팅 페이지 "어떤 고민이세요?" 선택 행 3개(해외 취업 / 한국 귀국 / 아이 진로), 키보드로도 선택됨
- 부트캠프 상세 강사 표기 "Sylvia 교수" / "Prof. Sylvia"
- 기업 교육 페이지 방식 3개는 버튼처럼 보이지 않게 아이콘 목록으로
- 소개(about.html)는 기존 페이지 유지. 커리어는 부산과학기술대학교 교수가 맨 위

## 디자인 기준

캔버스(SylviaLab 리디자인 시안)의 모바일 보드와 반응형 1440/768 보드가 기준이에요. 사이트는 그 내용에 맞춰져 있어요.
태블릿 768 부트캠프 목록 보드는 캔버스에서 뺐어요. 사이트 페이지는 그대로 반응형으로 나가요.

## 아직 빈칸인 것

- 기수 날짜, 가격, 남은 자리, 후기 문장 (사이트에서는 숨겨 둠)
- 1:1 자문 바의 메시지 아이콘은 지금 이메일로 연결됨. 카카오톡 채널이 생기면 링크 교체

## 2026-10-31 추가: DESIGN.md 모음 (`/design-md/`)

- `sylvialab-website/design-md/` 폴더를 그대로 `sylvia-site`의 `design-md/`로 복사하면 https://sylvialab.kr/design-md/ 로 열려요.
- 목록(index.html) · 상세(detail.html#<slug>) · catalog.json · md/ 104개 파일.
- 출처: 해외 84개 VoltAgent/awesome-design-md (MIT), 국내 20개는 SylviaLab이 직접 쓴 sylviagithubhj/sylvialab-design-md (CC BY 4.0).
- 전 페이지 상단 메뉴·모바일 메뉴·푸터에 "DESIGN.md" 링크를 넣었어요. sylvia-site에는 Claude Code가 넣은 파비콘·JSON-LD가 있으니, html 파일을 통째로 덮지 말고 이 링크 세 줄만 옮겨 주세요.
- `about.html`(소개 페이지 새 디자인)은 아직 시안 고르는 중이라 이번에는 옮기지 마세요.
- 다시 만들 때: 두 저장소를 받아 `scripts/build_design_md.py`를 실행.
