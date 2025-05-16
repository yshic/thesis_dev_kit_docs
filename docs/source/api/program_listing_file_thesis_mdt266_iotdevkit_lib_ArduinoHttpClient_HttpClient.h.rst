
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_HttpClient.h:

Program Listing for File HttpClient.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_HttpClient.h>` (``thesis_mdt266_iotdevkit\lib\ArduinoHttpClient\HttpClient.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Class to simplify HTTP fetching on Arduino
   // (c) Copyright MCQN Ltd. 2010-2012
   // Released under Apache License, version 2.0
   
   #ifndef HttpClient_h
   #define HttpClient_h
   
   #include <Arduino.h>
   #include <IPAddress.h>
   #include "Client.h"
   
   static const int HTTP_SUCCESS =0;
   // The end of the headers has been reached.  This consumes the '\n'
   // Could not connect to the server
   static const int HTTP_ERROR_CONNECTION_FAILED =-1;
   // This call was made when the HttpClient class wasn't expecting it
   // to be called.  Usually indicates your code is using the class
   // incorrectly
   static const int HTTP_ERROR_API =-2;
   // Spent too long waiting for a reply
   static const int HTTP_ERROR_TIMED_OUT =-3;
   // The response from the server is invalid, is it definitely an HTTP
   // server?
   static const int HTTP_ERROR_INVALID_RESPONSE =-4;
   
   // Define some of the common methods and headers here
   // That lets other code reuse them without having to declare another copy
   // of them, so saves code space and RAM
   #define HTTP_METHOD_GET    "GET"
   #define HTTP_METHOD_POST   "POST"
   #define HTTP_METHOD_PUT    "PUT"
   #define HTTP_METHOD_PATCH  "PATCH"
   #define HTTP_METHOD_DELETE "DELETE"
   #define HTTP_HEADER_CONTENT_LENGTH "Content-Length"
   #define HTTP_HEADER_CONTENT_TYPE   "Content-Type"
   #define HTTP_HEADER_CONNECTION     "Connection"
   #define HTTP_HEADER_TRANSFER_ENCODING "Transfer-Encoding"
   #define HTTP_HEADER_USER_AGENT     "User-Agent"
   #define HTTP_HEADER_VALUE_CHUNKED  "chunked"
   
   class HttpClient : public Client
   {
   public:
       static const int kNoContentLengthHeader =-1;
       static const int kHttpPort =80;
       static const int kHttpsPort =443;
       static const char* kUserAgent;
   
   // FIXME Write longer API request, using port and user-agent, example
   // FIXME Update tempToPachube example to calculate Content-Length correctly
   
       HttpClient(Client& aClient, const char* aServerName, uint16_t aServerPort = kHttpPort);
       HttpClient(Client& aClient, const String& aServerName, uint16_t aServerPort = kHttpPort);
       HttpClient(Client& aClient, const IPAddress& aServerAddress, uint16_t aServerPort = kHttpPort);
   
       void beginRequest();
   
       void endRequest();
   
       void beginBody();
   
       int get(const char* aURLPath);
       int get(const String& aURLPath);
   
       int post(const char* aURLPath);
       int post(const String& aURLPath);
   
       int post(const char* aURLPath, const char* aContentType, const char* aBody);
       int post(const String& aURLPath, const String& aContentType, const String& aBody);
       int post(const char* aURLPath, const char* aContentType, int aContentLength, const byte aBody[]);
   
       int put(const char* aURLPath);
       int put(const String& aURLPath);
   
       int put(const char* aURLPath, const char* aContentType, const char* aBody);
       int put(const String& aURLPath, const String& aContentType, const String& aBody);
       int put(const char* aURLPath, const char* aContentType, int aContentLength, const byte aBody[]);
   
       int patch(const char* aURLPath);
       int patch(const String& aURLPath);
   
       int patch(const char* aURLPath, const char* aContentType, const char* aBody);
       int patch(const String& aURLPath, const String& aContentType, const String& aBody);
       int patch(const char* aURLPath, const char* aContentType, int aContentLength, const byte aBody[]);
   
       int del(const char* aURLPath);
       int del(const String& aURLPath);
   
       int del(const char* aURLPath, const char* aContentType, const char* aBody);
       int del(const String& aURLPath, const String& aContentType, const String& aBody);
       int del(const char* aURLPath, const char* aContentType, int aContentLength, const byte aBody[]);
   
       int startRequest(const char* aURLPath,
                        const char* aHttpMethod,
                        const char* aContentType = NULL,
                        int aContentLength = -1,
                        const byte aBody[] = NULL);
   
       void sendHeader(const char* aHeader);
   
       void sendHeader(const String& aHeader)
         { sendHeader(aHeader.c_str()); }
   
       void sendHeader(const char* aHeaderName, const char* aHeaderValue);
   
       void sendHeader(const String& aHeaderName, const String& aHeaderValue)
         { sendHeader(aHeaderName.c_str(), aHeaderValue.c_str()); }
   
       void sendHeader(const char* aHeaderName, const int aHeaderValue);
   
       void sendHeader(const String& aHeaderName, const int aHeaderValue)
         { sendHeader(aHeaderName.c_str(), aHeaderValue); }
   
       void sendBasicAuth(const char* aUser, const char* aPassword);
   
       void sendBasicAuth(const String& aUser, const String& aPassword)
         { sendBasicAuth(aUser.c_str(), aPassword.c_str()); }
   
       int responseStatusCode();
   
       bool headerAvailable();
   
       String readHeaderName();
   
       String readHeaderValue();
   
       int readHeader();
   
       int skipResponseHeaders();
   
       bool endOfHeadersReached();
   
       bool endOfBodyReached();
       virtual bool endOfStream() { return endOfBodyReached(); };
       virtual bool completed() { return endOfBodyReached(); };
   
       long contentLength();
   
       int isResponseChunked() { return iIsChunked; }
   
       String responseBody();
   
       void connectionKeepAlive();
   
       void noDefaultRequestHeaders();
   
       // Inherited from Print
       // Note: 1st call to these indicates the user is sending the body, so if need
       // Note: be we should finish the header first
       virtual size_t write(uint8_t aByte) { if (iState < eRequestSent) { finishHeaders(); }; return iClient-> write(aByte); };
       virtual size_t write(const uint8_t *aBuffer, size_t aSize) { if (iState < eRequestSent) { finishHeaders(); }; return iClient->write(aBuffer, aSize); };
       // Inherited from Stream
       virtual int available();
       virtual int read();
       virtual int read(uint8_t *buf, size_t size);
       virtual int peek() { return iClient->peek(); };
       virtual void flush() { iClient->flush(); };
   
       // Inherited from Client
       virtual int connect(IPAddress ip, uint16_t port) { return iClient->connect(ip, port); };
       virtual int connect(const char *host, uint16_t port) { return iClient->connect(host, port); };
       virtual void stop();
       virtual uint8_t connected() { return iClient->connected(); };
       virtual operator bool() { return bool(iClient); };
       virtual uint32_t httpResponseTimeout() { return iHttpResponseTimeout; };
       virtual void setHttpResponseTimeout(uint32_t timeout) { iHttpResponseTimeout = timeout; };
       virtual uint32_t httpWaitForDataDelay() { return iHttpWaitForDataDelay; };
       virtual void setHttpWaitForDataDelay(uint32_t delay) { iHttpWaitForDataDelay = delay; };
   protected:
       void resetState();
   
       int sendInitialHeaders(const char* aURLPath,
                        const char* aHttpMethod);
   
       /* Let the server know that we've reached the end of the headers
       */
       void finishHeaders();
   
       void flushClientRx();
   
       // Number of milliseconds that we wait each time there isn't any data
       // available to be read (during status code and header processing)
       static const int kHttpWaitForDataDelay = 100;
       // Number of milliseconds that we'll wait in total without receiving any
       // data before returning HTTP_ERROR_TIMED_OUT (during status code and header
       // processing)
       static const int kHttpResponseTimeout = 30*1000;
       static const char* kContentLengthPrefix;
       static const char* kTransferEncodingChunked;
       typedef enum {
           eIdle,
           eRequestStarted,
           eRequestSent,
           eReadingStatusCode,
           eStatusCodeRead,
           eReadingContentLength,
           eSkipToEndOfHeader,
           eLineStartingCRFound,
           eReadingBody,
           eReadingChunkLength,
           eReadingBodyChunk
       } tHttpState;
       // Client we're using
       Client* iClient;
       // Server we are connecting to
       const char* iServerName;
       IPAddress iServerAddress;
       // Port of server we are connecting to
       uint16_t iServerPort;
       // Current state of the finite-state-machine
       tHttpState iState;
       // Stores the status code for the response, once known
       int iStatusCode;
       // Stores the value of the Content-Length header, if present
       long iContentLength;
       // How many bytes of the response body have been read by the user
       int iBodyLengthConsumed;
       // How far through a Content-Length header prefix we are
       const char* iContentLengthPtr;
       // How far through a Transfer-Encoding chunked header we are
       const char* iTransferEncodingChunkedPtr;
       // Stores if the response body is chunked
       bool iIsChunked;
       // Stores the value of the current chunk length, if present
       int iChunkLength;
       uint32_t iHttpResponseTimeout;
       uint32_t iHttpWaitForDataDelay;
       bool iConnectionClose;
       bool iSendDefaultRequestHeaders;
       String iHeaderLine;
   };
   
   #endif
