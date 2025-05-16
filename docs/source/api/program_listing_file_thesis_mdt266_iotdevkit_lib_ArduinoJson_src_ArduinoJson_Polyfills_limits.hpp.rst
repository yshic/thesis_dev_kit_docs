
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_limits.hpp:

Program Listing for File limits.hpp
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_limits.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\limits.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "type_traits.hpp"
   
   #ifdef _MSC_VER
   #  pragma warning(push)
   #  pragma warning(disable : 4310)
   #endif
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // Differs from standard because we can't use the symbols "min" and "max"
   template <typename T, typename Enable = void>
   struct numeric_limits;
   
   template <typename T>
   struct numeric_limits<T, typename enable_if<is_unsigned<T>::value>::type> {
     static T lowest() {
       return 0;
     }
     static T highest() {
       return T(-1);
     }
   };
   
   template <typename T>
   struct numeric_limits<
       T, typename enable_if<is_integral<T>::value && is_signed<T>::value>::type> {
     static T lowest() {
       return T(T(1) << (sizeof(T) * 8 - 1));
     }
     static T highest() {
       return T(~lowest());
     }
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
   
   #ifdef _MSC_VER
   #  pragma warning(pop)
   #endif
