#Encontrar el mayor de un array con una sola iteracion
arr = input("arr: ")
arr = [int(x) for x in arr.split(' ')]
may = -13000000
for el in arr:
   may = el if el > may else may
print(may)