
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_integral.hpp:

Program Listing for File is_integral.hpp
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_integral.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_integral.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Configuration.hpp>
   
   #include "integral_constant.hpp"
   #include "is_same.hpp"
   #include "remove_cv.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // clang-format off
   template <typename T>
   struct is_integral : integral_constant<bool,
       is_same<typename remove_cv<T>::type, signed char>::value ||
       is_same<typename remove_cv<T>::type, unsigned char>::value ||
       is_same<typename remove_cv<T>::type, signed short>::value ||
       is_same<typename remove_cv<T>::type, unsigned short>::value ||
       is_same<typename remove_cv<T>::type, signed int>::value ||
       is_same<typename remove_cv<T>::type, unsigned int>::value ||
       is_same<typename remove_cv<T>::type, signed long>::value ||
       is_same<typename remove_cv<T>::type, unsigned long>::value ||
       is_same<typename remove_cv<T>::type, signed long long>::value ||
       is_same<typename remove_cv<T>::type, unsigned long long>::value ||
       is_same<typename remove_cv<T>::type, char>::value ||
       is_same<typename remove_cv<T>::type, bool>::value> {};
   // clang-format on
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
