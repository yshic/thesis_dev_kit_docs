
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Numbers_JsonFloat.hpp:

Program Listing for File JsonFloat.hpp
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Numbers_JsonFloat.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Numbers\JsonFloat.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Configuration.hpp>
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   #if ARDUINOJSON_USE_DOUBLE
   typedef double JsonFloat;
   #else
   typedef float JsonFloat;
   #endif
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
