# Multiplicar dos numeros in usar el operador de multiplicación
a = int(input("a: "))
b = int(input("b: "))
nega = b < 0 
res = 0
for i in range(abs(b)):
   res = res + (-a if nega else a)
print(res)