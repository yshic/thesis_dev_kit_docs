
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_const.hpp:

Program Listing for File is_const.hpp
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_const.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_const.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "integral_constant.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // A meta-function that return the type T without the const modifier
   template <typename T>
   struct is_const : false_type {};
   
   template <typename T>
   struct is_const<const T> : true_type {};
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
