# Generated by Django 4.0.3 on 2022-04-02 04:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_rename_aboutbussiness_proposal_applicationform_about_bussiness_proposal'),
    ]

    operations = [
        migrations.RenameField(
            model_name='applicationform',
            old_name='companyName',
            new_name='company_name',
        ),
    ]