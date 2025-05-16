
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_Writers_StdStreamWriter.hpp:

Program Listing for File StdStreamWriter.hpp
============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Serialization_Writers_StdStreamWriter.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Serialization\Writers\StdStreamWriter.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ostream>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TDestination>
   class Writer<
       TDestination,
       typename enable_if<is_base_of<std::ostream, TDestination>::value>::type> {
    public:
     explicit Writer(std::ostream& os) : os_(&os) {}
   
     size_t write(uint8_t c) {
       os_->put(static_cast<char>(c));
       return 1;
     }
   
     size_t write(const uint8_t* s, size_t n) {
       os_->write(reinterpret_cast<const char*>(s),
                  static_cast<std::streamsize>(n));
       return n;
     }
   
    private:
     std::ostream* os_;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
