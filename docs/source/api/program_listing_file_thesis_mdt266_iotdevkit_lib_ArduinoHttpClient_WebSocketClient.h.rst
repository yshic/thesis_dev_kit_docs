
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_WebSocketClient.h:

Program Listing for File WebSocketClient.h
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_WebSocketClient.h>` (``thesis_mdt266_iotdevkit\lib\ArduinoHttpClient\WebSocketClient.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // (c) Copyright Arduino. 2016
   // Released under Apache License, version 2.0
   
   #ifndef WebSocketClient_h
   #define WebSocketClient_h
   
   #include <Arduino.h>
   
   #include "HttpClient.h"
   
   #ifndef WS_TX_BUFFER_SIZE
     #define WS_TX_BUFFER_SIZE 128
   #endif
   
   static const int TYPE_CONTINUATION     = 0x0;
   static const int TYPE_TEXT             = 0x1;
   static const int TYPE_BINARY           = 0x2;
   static const int TYPE_CONNECTION_CLOSE = 0x8;
   static const int TYPE_PING             = 0x9;
   static const int TYPE_PONG             = 0xa;
   
   class WebSocketClient : public HttpClient
   {
   public:
       WebSocketClient(Client& aClient, const char* aServerName, uint16_t aServerPort = HttpClient::kHttpPort);
       WebSocketClient(Client& aClient, const String& aServerName, uint16_t aServerPort = HttpClient::kHttpPort);
       WebSocketClient(Client& aClient, const IPAddress& aServerAddress, uint16_t aServerPort = HttpClient::kHttpPort);
   
       int begin(const char* aPath = "/");
       int begin(const String& aPath);
   
       int beginMessage(int aType);
   
       int endMessage();
   
       int parseMessage();
   
       int messageType();
   
       bool isFinal();
   
       String readString();
   
       int ping();
   
       // Inherited from Print
       virtual size_t write(uint8_t aByte);
       virtual size_t write(const uint8_t *aBuffer, size_t aSize);
       // Inherited from Stream
       virtual int available();
       virtual int read();
       virtual int read(uint8_t *buf, size_t size);
       virtual int peek();
   
   private:
       void flushRx();
   
   private:
       bool iTxStarted;
       uint8_t iTxMessageType;
       uint8_t iTxBuffer[WS_TX_BUFFER_SIZE];
       uint64_t iTxSize;
   
       uint8_t iRxOpCode;
       uint64_t iRxSize;
       bool iRxMasked;
       int iRxMaskIndex;
       uint8_t iRxMaskKey[4];
   };
   
   #endif
