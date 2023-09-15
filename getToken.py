import argparse
import requests
import xml.etree.ElementTree as ET

parser = argparse.ArgumentParser(description='Login to Newberry API and get token')
parser.add_argument('username', type=str, help='Newberry API username')
parser.add_argument('password', type=str, help='Newberry API password')
args = parser.parse_args()

url = f'https://collections.newberry.org/API/Authentication/v2.0/Login?Login={args.username}&Password={args.password}'

response = requests.post(url)

root = ET.fromstring(response.content)
token = root.find('.//Token').text

print(f'Token: {token}')
