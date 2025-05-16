
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Namespace.hpp:

Program Listing for File Namespace.hpp
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Namespace.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Namespace.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Configuration.hpp>
   #include <ArduinoJson/Polyfills/preprocessor.hpp>
   #include <ArduinoJson/version.hpp>
   
   #ifndef ARDUINOJSON_VERSION_NAMESPACE
   
   #  define ARDUINOJSON_VERSION_NAMESPACE                                       \
       ARDUINOJSON_CONCAT4(                                                      \
           ARDUINOJSON_VERSION_MACRO,                                            \
           ARDUINOJSON_BIN2ALPHA(                                                \
               ARDUINOJSON_ENABLE_PROGMEM, ARDUINOJSON_USE_LONG_LONG,            \
               ARDUINOJSON_USE_DOUBLE, ARDUINOJSON_ENABLE_STRING_DEDUPLICATION), \
           ARDUINOJSON_BIN2ALPHA(                                                \
               ARDUINOJSON_ENABLE_NAN, ARDUINOJSON_ENABLE_INFINITY,              \
               ARDUINOJSON_ENABLE_COMMENTS, ARDUINOJSON_DECODE_UNICODE),         \
           ARDUINOJSON_SLOT_OFFSET_SIZE)
   
   #endif
   
   #define ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE \
     namespace ArduinoJson {                  \
     inline namespace ARDUINOJSON_VERSION_NAMESPACE {
   
   #define ARDUINOJSON_END_PUBLIC_NAMESPACE \
     }                                      \
     }
   
   #define ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE        \
     namespace ArduinoJson {                          \
     inline namespace ARDUINOJSON_VERSION_NAMESPACE { \
     namespace detail {
   
   #define ARDUINOJSON_END_PRIVATE_NAMESPACE \
     }                                       \
     }                                       \
     }
