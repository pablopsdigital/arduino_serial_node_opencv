//test inicial probar envio conexión serial
//https://www.arduino.cc/reference/en/language/functions/communication/serial/print?from=Reference.PrintHex

int contador = 0;

void setup() {
  Serial.begin(9600);

}

void loop() {
  Serial.print(++contador, DEC); //DEC decimal base 10
  delay(2000);
}
