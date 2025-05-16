
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_StoragePolicy.hpp:

Program Listing for File StoragePolicy.hpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_StoragePolicy.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Strings\StoragePolicy.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   namespace StringStoragePolicy {
   
   struct Link {};
   struct Copy {};
   struct LinkOrCopy {
     bool link;
   };
   }  // namespace StringStoragePolicy
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
