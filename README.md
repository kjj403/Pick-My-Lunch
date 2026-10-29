# Pick My Lunch

선호 조건에 맞는 점심 메뉴와 레시피를 추천하는 웹 앱입니다. AI 코딩 도구를 활용한 개인 과제로, React 화면과 서버 함수의 LLM API 호출을 연결했습니다.

## 확인할 기능

- 선호 조건과 기피 음식 입력, 메뉴 추천, 레시피 조회
- `다시 뽑기` 요청과 이전 메뉴 제외 처리
- 서버에서 LLM API를 호출하고 JSON 응답을 화면 데이터로 변환
- 입력 길이 제한, Origin 검사, 요청 빈도 제한과 봇 확인을 위한 서버 가드
- API 오류와 응답 형식 오류 처리

## 코드 안내

| 위치 | 역할 |
|---|---|
| `src/` | React 화면과 클라이언트 요청 처리 |
| `api/recommend.js` | 메뉴 추천과 이전 메뉴 제외 요청 |
| `api/recipe.js` | 레시피 요청 |
| `api/_lib/openaiServer.js` | 서버 환경변수로 API 클라이언트 생성 |
| `api/_lib/guards.js` | 요청 검사와 공통 가드 실행 |
| `.env.example` | 필요한 환경변수 이름과 예시 |

흐름: 화면 입력 → 서버 함수 → 입력 검사 → LLM API → 응답 파싱 → 화면 표시

## 로컬 실행

```bash
npm ci
cp .env.example .env
```

`.env.example`을 참고해 서버 전용 환경변수 `OPENAI_API_KEY`를 설정합니다. 비밀키를 `VITE_` 접두사의 클라이언트 환경변수로 만들지 않습니다.

화면만 확인할 때:

```bash
npm run dev
```

Vite 개발 서버만으로는 Vercel의 API 함수가 실행되지 않습니다. 실제 서버 요청까지 확인하려면 Vercel CLI가 설치된 환경에서 다음을 실행합니다.

```bash
vercel dev
```

배포 시에는 `.env.example`과 서버 가드 코드를 참고해 Turnstile과 Upstash 설정을 확인합니다. 설정 유무에 따라 개발 환경과 배포 환경의 가드 동작이 다릅니다.

## 빌드

```bash
npm run build
```

## 기술과 해석 범위

- React, Vite, Tailwind CSS
- Vercel 서버 함수, LLM API
- Cloudflare Turnstile, Upstash Redis를 이용하는 요청 가드
- 특정 함수를 모델이 선택하는 Tool Calling이나 LangGraph 기반 Agent 구현을 증명하는 프로젝트는 아닙니다.
- 추천 결과의 정확성이나 알레르기 안전성을 보증하는 검증은 수행하지 않았습니다.
- 화면 빌드 성공과 유료 API를 이용한 실제 응답 검증은 별도입니다.
