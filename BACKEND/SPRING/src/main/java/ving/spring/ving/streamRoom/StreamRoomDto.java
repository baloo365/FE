package ving.spring.ving.streamRoom;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;
import ving.spring.ving.streamRoom.alarm.AlarmModel;

import java.util.List;

public class StreamRoomDto {

    @Getter
    @Builder
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CreateRoomRequest
    {
        private Boolean isAdult;
        private String roomName;
        private MultipartFile thumbNail;
    }


    @Builder
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class AlarmsDto
    {
        private List<Alarm> alarms;
    }
    @Builder
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Alarm
    {
        private String streamer;
    }
}