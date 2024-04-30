package ving.spring.ving.socket;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
// Socket 메세지 브로커의 설정을 담당하는 내용
// messageController 의 Bean인 simpMessageSendingOperations가 영향을 받을듯
@EnableWebSocketMessageBroker
public class WebSocketConfigurer implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // MessageBroker 레지스트리를 바꿈
        // /sub와 /pub에 대해서
        registry.enableSimpleBroker("/sub");
        registry.setApplicationDestinationPrefixes("/pub");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Stomp registry를 설정하는것 Endpoint란 클라이언트에서 보내는 소켓요청을
        // 받는 지점을 말하는건듯
        // ws요청을 받게 해놨고 origin은 전부다 허용함
        registry
                .addEndpoint("/ws")
                .setAllowedOrigins("*")
                .withSockJS();
    }
}