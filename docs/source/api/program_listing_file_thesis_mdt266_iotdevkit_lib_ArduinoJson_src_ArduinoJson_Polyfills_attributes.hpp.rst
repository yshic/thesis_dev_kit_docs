
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_attributes.hpp:

Program Listing for File attributes.hpp
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_attributes.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\attributes.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #ifdef _MSC_VER  // Visual Studio
   
   #  define FORCE_INLINE  // __forceinline causes C4714 when returning std::string
   #  define NO_INLINE __declspec(noinline)
   
   #elif defined(__GNUC__)  // GCC or Clang
   
   #  define FORCE_INLINE __attribute__((always_inline))
   #  define NO_INLINE __attribute__((noinline))
   
   #else  // Other compilers
   
   #  define FORCE_INLINE
   #  define NO_INLINE
   
   #endif
   
   #if defined(__has_attribute)
   #  if __has_attribute(no_sanitize)
   #    define ARDUINOJSON_NO_SANITIZE(check) __attribute__((no_sanitize(check)))
   #  else
   #    define ARDUINOJSON_NO_SANITIZE(check)
   #  endif
   #else
   #  define ARDUINOJSON_NO_SANITIZE(check)
   #endif
