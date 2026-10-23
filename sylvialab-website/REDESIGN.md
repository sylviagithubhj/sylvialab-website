# SylviaLab 새 사이트

정적 HTML 사이트예요. 빌드 과정 없이 파일을 그대로 올리면 됩니다.

## 파일

| 파일 | 내용 |
|---|---|
| `index.html` | 홈 · 사람 중심 (소개, 요즘 붙들고 있는 질문, 글, 함께할 수 있는 일, 걸어온 길, 월간 레터) |
| `work.html` | 함께하는 일 (대상 고르기, 세 갈래 과정, 자가진단, 기록, 무료 자료, 문의 폼) |
| `hri.html` | 사람과 로봇 사이 설계하기 |
| `ops.html` | 현장에 AI·로봇 들이기 |
| `edu.html` | AI 수업 만들기 |
| `assets/style.css` | 전체 스타일과 모션 토큰 |
| `assets/main.js` | 눈동자, 대상 선택, 체크리스트, 기록 필터, 폼 |
| `sitemap.xml`, `robots.txt` | 검색 노출용 |

## 지금 사이트(Vercel)에 올리는 법

1. 지금 저장소를 먼저 백업하세요. `index.html`이 새 것으로 바뀝니다.
2. 이 폴더의 파일을 저장소 맨 위에 복사하세요. `profile.jpg`, `about.html`, `archive.html`, `writing.html`은 그대로 두면 돼요. 새 홈 푸터에서 링크하고 있어요.
3. 커밋하고 푸시하면 Vercel이 자동으로 배포해요. 처음엔 `main`이 아닌 브랜치로 올려서 미리보기 주소에서 먼저 확인하는 걸 권해요.

## 올리기 전에 바꿀 것

- **폼 연결** (`assets/main.js` 맨 위 `CONFIG`)
  - `leadEndpoint`: 무료 자료 이메일을 받을 주소 (예: 스티비, Formspree, Google Apps Script)
  - `contactEndpoint`: 문의 폼을 받을 주소
  - 비워두면 방문자 메일 앱이 열리면서 `heejuk@mail.hongik.ac.kr`로 보내져요.
- **래피드 링크**: `edu.html`의 `TODO` 주석이 있는 세 곳(`href="#kit"`)을 교안 키트 상품 주소로.
- **LinkedIn**: 지금 사이트에도 비어 있어요. 주소가 생기면 푸터에 추가하세요.
- **Amplitude**: 기존 사이트에 있던 분석 스크립트는 넣지 않았어요. 계속 쓰려면 기존 `<head>`의 스크립트를 각 페이지에 다시 붙이세요.
- **EN / 中**: 새 사이트는 아직 한국어만 있어요.

## MVP 실험 페이지 (귀국자)

| 페이지 | 하는 일 | 성공 기준 (6주) |
|---|---|---|
| `return.html` | 귀국 커리어 진단 45분, 59,000원, 월 5자리 → 래피드 결제. 아래에 '국내 취업 전환 패키지' 대기 신청 | 2주 안에 5자리 결제, 패키지 대기 10명 |
| `club.html` | 리턴 클럽 가입 신청 (무료, 월 1회 모임). '지금 더 중요한 것'으로 생계 우선 / 직무·대우 우선을 나눠 받음 | 신청 30명, 첫 모임 참석 15명, 진단으로 넘어간 사람 3명 |

| `fellowship.html` | 리턴 펠로십 1기: 멘토 3명(호스트+게스트 2) + 선발된 동료 8명, 6주, 390,000원. 지원서 → 선발 후 결제 안내 | 지원서 15건, 그중 결제 의향 확인 5건 |

**핵심 비교**: 같은 사람들에게 `return.html`(콘텐츠형 진단)과 `fellowship.html`(사람·동료형)을 같이 보여주세요. 가격이 7배 가까이 비싼데도 펠로십 지원이 진단 결제만큼 나온다면 "누구에게 배우고 누구와 함께 있는가"가 구매 조건이라는 가설이 맞는 거예요. 게스트 멘토 이름을 공개하기 전과 후의 지원 수를 비교하면 멘토의 효과도 따로 볼 수 있어요.

6주 뒤에는 클럽 신청자를 '지금 더 중요한 것' 답으로 나눠서 보세요. 두 부류가 진단과 패키지에 다르게 반응한다면, 상품도 둘로 나눠야 한다는 신호예요.

두 페이지는 홈 메뉴에 걸지 않았어요. 링크를 직접 나눠주는 실험용이에요.

**올리기 전에 채울 것**
- `return.html`: 래피드 진단 상품 주소 (`href="#rapid"`), 가격 확정
- `club.html`: 첫 모임 날짜·장소
- 두 페이지 `<head>`의 `AMP_KEY`: 기존 Amplitude 키
- `assets/main.js`의 `clubEndpoint`: 가입 신청을 받을 주소 (비우면 메일 앱으로 보내져요)

**링크는 채널마다 다르게 나눠주세요.** 어디서 온 사람이 가입했는지 보여요.
- 링크드인: `https://sylvialab.kr/club.html?utm_source=linkedin`
- 기존 멘티·학생: `https://sylvialab.kr/club.html?utm_source=mentee`
- 유학생 커뮤니티: `https://sylvialab.kr/club.html?utm_source=community`

**기록되는 이벤트 (Amplitude 키를 넣으면)**: `return_view`, `return_cta_click`, `return_to_club`, `return_package_waitlist`, `lead_submit`, `club_view`, `club_hero_click`, `club_join_submit`, `club_to_return`, `club_to_fellowship`, `fellowship_view`, `fellowship_cta_click`, `fellowship_apply_submit`, `fellowship_to_club`

## 바뀐 점

- 모든 글이 처음부터 HTML 안에 있어서 검색엔진, AI 검색, 카카오톡·링크드인 미리보기에 제대로 잡혀요.
- 제목 쉼표 띄어쓰기, canonical 주소를 `https://sylvialab.kr/`로 통일했어요.
- 구조화 데이터(Person, Course)를 넣었어요.
- '동작 줄이기'를 켠 방문자에게는 애니메이션이 꺼져요.
