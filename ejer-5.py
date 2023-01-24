#contar palabras repetidas de una cadena
cadena = input("cad: ")
cadena = cadena.replace('?','')
cadena = cadena.replace('.','')
cadena = cadena.replace(',','')
cadena = cadena.lower()
arr = cadena.split(' ')
dic = {}
for el in arr:
   if(dic.get(el)):
      dic[el] = dic.get(el) + 1
   else:
      dic[el] = 1
#Elementos que se repiten mas de una vez
print(list(filter(lambda x: (dic.get(x) > 1), list(dic.keys()))))

#elemento que más se repite
resultado = -1000000
llave = ''
for el in dic.keys():
   if(dic.get(el) > resultado):
      llave = el
      resultado = dic.get(el)
print(llave, resultado)