#aplanar un array en un nivel
arr = [1,2,[2,3,4], [12,[4,2],4]]
nuevo = []
for x in arr:
   if type(x) == int:
      nuevo.append(x)
   else:
      nuevo = [*nuevo, *x]

print(nuevo)