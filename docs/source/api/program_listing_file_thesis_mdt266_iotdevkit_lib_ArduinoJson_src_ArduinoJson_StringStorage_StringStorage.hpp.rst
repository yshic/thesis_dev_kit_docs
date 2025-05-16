
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_StringStorage_StringStorage.hpp:

Program Listing for File StringStorage.hpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_StringStorage_StringStorage.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\StringStorage\StringStorage.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/StringStorage/StringCopier.hpp>
   #include <ArduinoJson/StringStorage/StringMover.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TInput>
   StringCopier makeStringStorage(TInput&, MemoryPool* pool) {
     ARDUINOJSON_ASSERT(pool != 0);
     return StringCopier(pool);
   }
   
   template <typename TChar>
   StringMover makeStringStorage(
       TChar* input, MemoryPool*,
       typename enable_if<!is_const<TChar>::value>::type* = 0) {
     return StringMover(reinterpret_cast<char*>(input));
   }
   ARDUINOJSON_END_PRIVATE_NAMESPACE
