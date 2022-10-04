import xml.dom.minidom
  
docs = xml.dom.minidom.parse("dog.xml")

print(docs.toxml())