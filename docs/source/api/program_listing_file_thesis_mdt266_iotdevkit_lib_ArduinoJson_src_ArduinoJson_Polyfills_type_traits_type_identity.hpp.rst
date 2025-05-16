
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_type_identity.hpp:

Program Listing for File type_identity.hpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_type_identity.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\type_identity.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "integral_constant.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T>
   struct type_identity {
     typedef T type;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
