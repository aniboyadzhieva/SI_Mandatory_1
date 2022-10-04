import pandas as pd

df = pd.read_json('dog.json')

print(df.to_string()) 