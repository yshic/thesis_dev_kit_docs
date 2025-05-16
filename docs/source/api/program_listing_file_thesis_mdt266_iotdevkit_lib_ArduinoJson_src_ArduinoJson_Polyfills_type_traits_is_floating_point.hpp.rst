
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_floating_point.hpp:

Program Listing for File is_floating_point.hpp
==============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_floating_point.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_floating_point.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "integral_constant.hpp"
   #include "is_same.hpp"
   #include "remove_cv.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <class T>
   struct is_floating_point
       : integral_constant<
             bool,  //
             is_same<float, typename remove_cv<T>::type>::value ||
                 is_same<double, typename remove_cv<T>::type>::value> {};
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
