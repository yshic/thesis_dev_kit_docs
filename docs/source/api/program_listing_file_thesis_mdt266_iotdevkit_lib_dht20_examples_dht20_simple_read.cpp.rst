
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_dht20_examples_dht20_simple_read.cpp:

Program Listing for File dht20_simple_read.cpp
==============================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_dht20_examples_dht20_simple_read.cpp>` (``thesis_mdt266_iotdevkit\lib\dht20\examples\dht20_simple_read.cpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #include <Arduino.h>
   #include <Wire.h>
   #include <dht20.h>
   
   // Create the dht20 object
   DHT20 dht20;
   
   void setup()
   {
     // Init the sensor
     dht20.begin();
   }
   
   void loop()
   {
     // Start the reading of temperature and humidity on the sensor
     float temp, hum;
     dht20.readTempAndHumidity();
     temp = dht20.getTemperature();
     hum  = dht20.getHumidity();
   
     // Print the result
     Serial.print("Temperature: ");
     Serial.print(temp);
     Serial.print("\n");
     Serial.print("Humidity: ");
     Serial.print(hum);
     Serial.print("\n");
   }
