
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_IteratorReader.hpp:

Program Listing for File IteratorReader.hpp
===========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Deserialization_Readers_IteratorReader.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Deserialization\Readers\IteratorReader.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename TIterator>
   class IteratorReader {
     TIterator ptr_, end_;
   
    public:
     explicit IteratorReader(TIterator begin, TIterator end)
         : ptr_(begin), end_(end) {}
   
     int read() {
       if (ptr_ < end_)
         return static_cast<unsigned char>(*ptr_++);
       else
         return -1;
     }
   
     size_t readBytes(char* buffer, size_t length) {
       size_t i = 0;
       while (i < length && ptr_ < end_)
         buffer[i++] = *ptr_++;
       return i;
     }
   };
   
   template <typename T>
   struct void_ {
     typedef void type;
   };
   
   template <typename TSource>
   struct Reader<TSource, typename void_<typename TSource::const_iterator>::type>
       : IteratorReader<typename TSource::const_iterator> {
     explicit Reader(const TSource& source)
         : IteratorReader<typename TSource::const_iterator>(source.begin(),
                                                            source.end()) {}
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
