//
//ServerManager.js
//

/*
생성자 호출시,
Express 를 이용하여 http 서버를 만들고, socket.io 를 이용해 http서버와 소켓을 연결한 뒤, 연결된 소켓을 this.mySocket에 저장
SocketManager.getSocket()은 mySocket을 반환
다른 매니저 객체들은 SocketManager.getSocket()을 통해 소켓과 통신
*/