import yaml
from yaml.loader import SafeLoader

with open('dog.yaml') as f:
    data = yaml.load(f, Loader=SafeLoader)
    print(data)