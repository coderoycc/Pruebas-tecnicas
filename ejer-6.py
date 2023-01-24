#verificar si una palabra es palindrome
cad = input("Cad: ")
cad = cad.lower()
cad = cad.replace('?','')
cad = cad.replace(',','')
cad = cad.replace('.','')
cad = cad.replace(' ','')
print(cad == cad[::-1])
