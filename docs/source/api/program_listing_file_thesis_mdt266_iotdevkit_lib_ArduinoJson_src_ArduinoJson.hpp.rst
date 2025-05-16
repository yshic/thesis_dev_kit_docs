
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson.hpp:

Program Listing for File ArduinoJson.hpp
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #if __cplusplus < 201103L && (!defined(_MSC_VER) || _MSC_VER < 1910)
   #  error ArduinoJson requires C++11 or newer. Configure your compiler for C++11 or downgrade ArduinoJson to 6.20.
   #endif
   
   #include "ArduinoJson/Configuration.hpp"
   
   // Include Arduino.h before stdlib.h to avoid conflict with atexit()
   // https://github.com/bblanchon/ArduinoJson/pull/1693#issuecomment-1001060240
   #if ARDUINOJSON_ENABLE_ARDUINO_STRING || ARDUINOJSON_ENABLE_ARDUINO_STREAM || \
       ARDUINOJSON_ENABLE_ARDUINO_PRINT ||                                       \
       (ARDUINOJSON_ENABLE_PROGMEM && defined(ARDUINO))
   #  include <Arduino.h>
   #endif
   
   #if !ARDUINOJSON_DEBUG
   #  ifdef __clang__
   #    pragma clang system_header
   #  elif defined __GNUC__
   #    pragma GCC system_header
   #  endif
   #endif
   
   #include "ArduinoJson/Array/JsonArray.hpp"
   #include "ArduinoJson/Object/JsonObject.hpp"
   #include "ArduinoJson/Variant/JsonVariantConst.hpp"
   
   #include "ArduinoJson/Document/DynamicJsonDocument.hpp"
   #include "ArduinoJson/Document/StaticJsonDocument.hpp"
   
   #include "ArduinoJson/Array/ElementProxy.hpp"
   #include "ArduinoJson/Array/JsonArrayImpl.hpp"
   #include "ArduinoJson/Array/Utilities.hpp"
   #include "ArduinoJson/Collection/CollectionImpl.hpp"
   #include "ArduinoJson/Object/JsonObjectImpl.hpp"
   #include "ArduinoJson/Object/MemberProxy.hpp"
   #include "ArduinoJson/Variant/ConverterImpl.hpp"
   #include "ArduinoJson/Variant/VariantCompare.hpp"
   #include "ArduinoJson/Variant/VariantImpl.hpp"
   
   #include "ArduinoJson/Json/JsonDeserializer.hpp"
   #include "ArduinoJson/Json/JsonSerializer.hpp"
   #include "ArduinoJson/Json/PrettyJsonSerializer.hpp"
   #include "ArduinoJson/MsgPack/MsgPackDeserializer.hpp"
   #include "ArduinoJson/MsgPack/MsgPackSerializer.hpp"
   
   #include "ArduinoJson/compatibility.hpp"
