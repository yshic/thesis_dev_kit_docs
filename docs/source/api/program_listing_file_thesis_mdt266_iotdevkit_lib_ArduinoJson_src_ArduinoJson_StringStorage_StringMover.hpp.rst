
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_StringStorage_StringMover.hpp:

Program Listing for File StringMover.hpp
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_StringStorage_StringMover.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\StringStorage\StringMover.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   #include <ArduinoJson/Strings/JsonString.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   class StringMover {
    public:
     StringMover(char* ptr) : writePtr_(ptr) {}
   
     void startString() {
       startPtr_ = writePtr_;
     }
   
     FORCE_INLINE JsonString save() {
       JsonString s = str();
       writePtr_++;
       return s;
     }
   
     void append(char c) {
       *writePtr_++ = c;
     }
   
     bool isValid() const {
       return true;
     }
   
     JsonString str() const {
       writePtr_[0] = 0;  // terminator
       return JsonString(startPtr_, size(), JsonString::Linked);
     }
   
     size_t size() const {
       return size_t(writePtr_ - startPtr_);
     }
   
    private:
     char* writePtr_;
     char* startPtr_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
