
# 🎱Ving🎙
실시간 방송과 소통을 통해,
<br>
아티스트와 시청자를 연결하는 라이브 스트리밍 개인 방송 플랫폼!
### 목차
1. [프로젝트 기간](#1-프로젝트-기간)
2. [사용한 기술 스택](#2-사용한-기술-스택)
3. [팀원 소개](#3-팀원-소개)
4. [폴더 구조](#4-폴더-구조)
5. [설계](#5-설계)
6. [주요 기능 설명](#6-주요-기능-설명)
7. [서비스 화면](#7-서비스-화면)

----

### 1. 프로젝트 기간
  - 2024.04.08 ~ 2024.05.20 (6주)

### 2. 사용한 기술 스택
  * next
  * node.js
  * zustand
  * vanilla-extract
  * axios

### 3. 팀원 소개
<table width="100%">
  <tr>
    <td width="33%" align="center">
      <img src="https://github.com/TEAM-Ving/FE/assets/124110711/c63b8aff-f5f5-4300-b02e-891cb3c4a660" width="100%"/>
      <b><a href="https://github.com/baloo365">나유경</a></b> 
    </td>
    <td width="33%" align="center">
      <img src="https://github.com/TEAM-Ving/FE/assets/124110711/fd5a3dfa-ee4d-4344-b903-95de785749ea" width="100%"/>
      <b><a href="https://github.com/goldbutnew">이금현</a></b> 
    </td>
    <td width="33%" align="center">
      <img src="https://github.com/TEAM-Ving/FE/assets/124110711/6279de8e-0813-4c82-8bb4-f48c86bdde27" width="100%"/>
      <b><a href="https://github.com/uuniversey">이우주</a></b> 
    </td>
  </tr>
  <tr>
    <td width="33%" align="center">
      메인<br>
      유저 프로필/채널 관리<br>
      대시보드<br>
    </td>
    <td width="33%" align="center">
      UI/UX<br>
      팔로우 알림/실시간 채팅(소켓)<br>
      채팅 음성 변환(tts)<br>
      후원
    </td>
    <td width="33%" align="center">
      실시간 방송 스트리밍<br>
      회원 관리<br>
      스트리밍 방 생성<br>
      navigation 관리<br>
    </td>
  </tr>
</table>

### 4. 폴더 구조
```
src
├─api   
├─app
│  ├─(studio)
│  │  └─studio
│  │      └─[username] 
│  │          ├─charge    
│  │          ├─static    
│  │          └─streaming                  
│  └─(ving)
│      ├─profile
│      │  └─[username]
│      │      └─video            
│      ├─setting
│      │  └─[username]    
│      ├─streaming
│      │  └─[username]
│      │      └─[videoSerial]             
│      ├─tmp   
│      └─tmp2
├─components
│  ├─Alert     
│  ├─BottomSheet   
│  ├─Button      
│  ├─Card    
│  ├─Chat    
│  ├─Container
│  ├─DropdownMenu     
│  ├─Input   
│  ├─LoadingSpinner   
│  ├─Modal     
│  ├─NavBar    
│  ├─NewsFeed    
│  ├─Notifer    
│  ├─ProfileImg   
│  ├─Ranking   
│  ├─SideBar     
│  └─StreamingVideo   
├─containers
│  ├─auth   
│  ├─main    
│  ├─profile   
│  ├─setting    
│  ├─streaming
│  │  └─RecordedVideo     
│  ├─studio
│  │  ├─Charge     
│  │  ├─Dashboard    
│  │  ├─StartStreaming     
│  │  └─static      
│  ├─tmp     
│  └─tmp2        
├─hooks 
├─store    
├─styles     
└─utils
```

### 5. 설계
* 목업
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/f821b1a8-7903-4fb0-942c-58aaba6e4534" width="100%"/>
      </td>
    </tr>
  </table>

* 플로우차트
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/030ae178-1ea2-4abb-8ddd-5a4286e30060" width="100%"/>
      </td>
    </tr>
  </table>

### 6. 주요 기능 설명
메인
- 실시간 스트리밍 채널 조회
- 최다 팔로워/시청자 랭킹 조회
- 스트리머 검색

프로필/채널 관리
- 팔로우
- 채널 알림 받기
- 대표 영상 상단 고정

스트리밍
- 스트리밍 방 생성
- 녹화 영상 생성

방송 시청
- 실시간 채팅(socket)
- 채팅 음성 변환(tts)
- 초코 후원
- 방송 화질 설정
- 비디오 재생 조작(플레이어 바)

### 7. 서비스 화면
* 메인/검색
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/82b1d663-1f9d-4385-b45c-df29010ebc76" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/a962d7de-9037-4e7f-b87f-2708ee988752" width="100%" />
      </td>
    </tr>
  </table>

* 프로필/채널 관리
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/574ac850-5073-42bb-a749-21349011c439" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/9dcb2e09-a271-4be5-9b72-78b8f6c0c9af" width="100%" />
      </td>
    </tr>
  </table>

* 스트리밍(방 생성/스트리머 방송 화면)
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/3926be81-85a6-4e57-bfc0-9c34c887e9d3" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/1dd47917-4feb-46dd-87d7-3a8186a7c1f3" width="100%" />
      </td>
    </tr>
  </table>

* 스트리밍 시청(시청자 화면/채팅/후원)
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/3d67fd9a-fbb5-4e12-b006-c082ef0509f6" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/f2adbf54-10b2-4bd3-892c-8619f17637a9" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/cf5dbda6-0609-43d7-9ec2-b6afed63ed14" width="100%" />
      </td>
    </tr>
  </table>

* 방송 화면 설정/녹화 영상
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/04c57025-7a2c-4d07-8099-ff9a47911d87" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/c1fcaab7-58bc-46a6-ad50-957922755f4b" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/1b5b6436-5bc7-4e82-8259-cac1bfc44ce8" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/cf248684-4222-4124-9983-44cb127ce65e" width="100%" />
      </td>
    </tr>
  </table>

* 초코 후원
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/d8c1a8aa-5735-4734-860c-f8d4b29eca0e" width="100%" />     
      </td>
    </tr>
  </table>

* 대시보드/통계
  <table>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/82129da5-fc09-4ecc-9153-bb8d9f374771" width="100%" />
      </td>
    </tr>
    <tr>
      <td>
        <img src="https://github.com/TEAM-Ving/FE/assets/124110711/3ee2eede-99fa-4193-b2f3-7c6101f1ce23" width="100%" />
      </td>
    </tr>
  </table>
